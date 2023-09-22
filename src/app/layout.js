import './globals.css'
import { Nunito } from 'next/font/google'

const inter = Nunito({
  subsets: ['latin-ext'],
  weight: ['500'],
})

export const metadata = {
  title: 'CodeВ’ю - ключ до успішних інтерв’ю!',
  description: 'CodeВ’ю - ключ до успішних інтерв’ю!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
