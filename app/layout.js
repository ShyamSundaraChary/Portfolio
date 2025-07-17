import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shyam Sundara Chary | Full-Stack Developer',
  description: 'Portfolio of Shyam Sundara Chary - Full-Stack Developer, AI Enthusiast, and DSA Lover. Building scalable solutions with MERN Stack and AI.',
  keywords: 'Full-Stack Developer, AI, DSA, MERN Stack, React, Node.js, Python, JavaScript',
  authors: [{ name: 'Shyam Sundara Chary' }],
  creator: 'Shyam Sundara Chary',
  openGraph: {
    title: 'Shyam Sundara Chary | Full-Stack Developer',
    description: 'Building scalable solutions with AI, DSA, and the MERN Stack',
    url: 'https://shyamsundarachary.dev',
    siteName: 'Shyam Sundara Chary Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shyam Sundara Chary | Full-Stack Developer',
    description: 'Building scalable solutions with AI, DSA, and the MERN Stack',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}