function Container({
    children,
    className = '',
}: Readonly<{ children: React.ReactNode; className?: string }>) {
    return (
        <div className={'max-w-screen-2xl px-3 mx-auto ' + className}>
            {children}
        </div>
    )
}

export default Container
