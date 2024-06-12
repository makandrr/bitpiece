import Container from '@/components/Container'

function About() {
    return (
        <Container>
            <p className="text-lg">
                Welcome to{' '}
                <b>
                    <span className="text-secondary">Bit</span>{' '}
                    <span className="text-primary">Piece</span>
                </b>
                ! This space is designed to provide you with a daily dose of
                insightful information, delivered in bite-sized posts that are
                easy to digest. Each day, you&apos;ll find a new piece of
                content paired with a captivating image, offering fresh
                perspectives and ideas to spark your curiosity and inspire your
                day.
            </p>
            <p className="text-lg mt-4">
                In a world filled with endless streams of information, this blog
                aims to cut through the noise and bring you something
                meaningful, yet concise. Whether you&apos;re here for a quick
                read during your morning coffee or a brief escape in the middle
                of a busy day, this blog is here to serve as a small but
                valuable part of your daily routine.
            </p>
            <p className="text-lg mt-4">
                Join me as we explore new topics every day. Thank you for being
                a part of this journey, and I hope you find inspiration,
                knowledge, and joy in every post.
            </p>
        </Container>
    )
}

export default About
