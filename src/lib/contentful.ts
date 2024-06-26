import { createClient, Entry, Asset } from "contentful";
import { cache } from "react";
import { EntrySkeletonType } from "contentful";
import { log } from "./logger";

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
    log('fetchTodayPost')
    log('env.spaceID', process.env.CONTENTFUL_SPACE_ID)

    const entries = await client.getEntries({
        content_type: 'post',
        order: ['-sys.createdAt'],
        limit: 1
    });
    log('fetchTodayPost entries', entries)
    const post = entries.items[0]
    log('fetchTodayPost post', post)
    if (post && post.sys.contentType.sys.id === 'post') {
        log('fetchTodayPost return post', post)
        return post as PostEntry
    }
    log('fetchTodayPost return undefined')
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