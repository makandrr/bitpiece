import Post from '@/components/Post'
import { fetchTodayPost } from '@/lib/contentful'

export const revalidate = 3600

export default async function Home() {
    const post = await fetchTodayPost()

    if (!post) {
        return <p>No post for today...</p>
    }

    let imageUrl = ''
    if (post.fields.image.fields) {
        // @ts-ignore
        imageUrl = post.fields.image.fields.file.url
    }

    const document = post?.fields.content
    return (
        <main>
            <div className="flex justify-center px-4">
                {
                    <Post
                        title={String(post.fields.title)}
                        image={imageUrl ? 'https:' + imageUrl : ''}
                        content={document}
                    />
                }
            </div>
        </main>
    )
}
