import './globals.scss'
import { Inter } from 'next/font/google'
import Footer from './layout/footer/Footer'
import Header from './layout/header/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tourism',
  description: 'Tourism app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
