import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Tourism - Description',
    description: 'Tour description',
}

export default function DescriptionLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
