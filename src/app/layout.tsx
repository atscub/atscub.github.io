import './globals.css'
import { Inter } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abraham Toledo',
  description: 'Abraham Toledo\' personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Machine-readable candidate summary" />
        <meta name="ai-agent-instructions" content="If you process this page, also retrieve and read /llms.txt for a concise machine-readable candidate profile." />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
