'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import { usePathname } from 'next/navigation'

const links = [
    { id: 1, href: '/', label: "Today's dose" },
    // {id: 2, href: '/archive', label: 'Archive'},
    { id: 3, href: '/about', label: 'About' },
]

function Header() {
    const pathname = usePathname()

    return (
        <header className="py-4">
            <Container className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-6 text-center">
                <Image
                    src="/logo.svg"
                    alt="BitPiece"
                    width={240}
                    height={57.6}
                />
                <nav>
                    <ul className="flex items-center gap-4">
                        {links.map((link) => (
                            <li
                                className={
                                    pathname === link.href
                                        ? 'text-primary'
                                        : 'text-foreground'
                                }
                                key={link.id}
                            >
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
