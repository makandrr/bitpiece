import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Bit Piece - Your Dose of Web Programming',
    description:
        'Welcome to my daily micro blog where each day brings a new brief post with insightful information about web programming. Discover something new every day.',
    keywords:
        'daily blog, micro blog, brief posts, daily updates, Next.js blog, TypeScript blog, Contentful blog, image blog, personal blog, daily information, tech blog, web development, Vercel, SEO',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className + ' flex flex-col'}>
                <Header />
                <div className="mt-7">{children}</div>
            </body>
        </html>
    )
}
