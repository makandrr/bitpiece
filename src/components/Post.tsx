import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

function Post({
    title,
    image,
    content,
}: Readonly<{ title: string; image: string; content: any }>) {
    const richContentComponent = documentToReactComponents(content)
    return (
        <div className="flex-1 max-w-[50rem]">
            <h1 className="text-4xl mt-3">{title}</h1>

            <div className="relative h-40 md:h-80 rounded-md my-4 md:my-6">
                <Image
                    className="w-full h-full rounded-md relative"
                    objectFit="contain"
                    layout="fill"
                    src={image}
                    alt={title}
                />
            </div>

            <div className="post-rich-text mt-4">{richContentComponent}</div>
        </div>
    )
}

export default Post
