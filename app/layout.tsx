import './globals.css'
import type { Metadata } from 'next'
/* import { Inter } from 'next/font/google' */
import localFont from 'next/font/local'


const gilmer = localFont({
  src: [
    {
      path: '../public/fonts/GilmerRegular.otf',
      weight:'400',
      style:'normal',
    },
    {
      path: '../public/fonts/GilmerMedium.otf',
      weight:'600',
      style:'normal',
    },
    {
      path: '../public/fonts/GilmerBold.otf',
      weight:'700',
      style:'normal',
    },
    {
      path: '../public/fonts/GilmerHeavy.otf',
      weight:'900',
      style:'normal',
    },
  ],
  display: 'swap',
  variable: '--font-gilmer',
})

/* const inter = Inter({ subsets: ['latin'] }) */

export const metadata: Metadata = {
  title: 'Instiglabs',
  description: 'Stay Tuned for an Exciting Launch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gilmer.variable} font-gilmer scroll-smooth `}>{children}</body>
    </html>
  )
}
