import { createClient, Entry, Asset } from "contentful";
import { cache } from "react";
import { EntrySkeletonType } from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export interface PostFields {
    title: string;
    content: string;
    image: {
        fields: {
            file: {
                url: string;
            };
        };
    };
    date: string;
}

interface PostSkeleton extends EntrySkeletonType {
    fields: PostFields;
}

type PostEntry = Entry<PostSkeleton>;


export const fetchTodayPost = cache(async (): Promise<PostEntry | undefined> => {
    const today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)
    const entries = await client.getEntries({
        content_type: 'post',
        'fields.date': today.toISOString()
    });
    const post = entries.items[0]
    if (post && post.sys.contentType.sys.id === 'post') {
        return post as PostEntry
    }
    return undefined
})

export const fetchAllPosts = cache(async (limit: number, skip: number): Promise<Entry<any>[]> => {
    const entries = await client.getEntries({
        content_type: 'post',
        'fields.date[lte]': new Date().toISOString(),
        limit,
        skip,
        order: ['-fields.date']
    })
    return entries.items
})