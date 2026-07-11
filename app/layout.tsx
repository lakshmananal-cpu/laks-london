import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://laks.london'),
  title: 'Laks Alagappan - AI Thought Leader',
  description:
    "Laks Alagappan · VP of Technology at Genpact. Writing on AI, agentic systems, and scaling enterprise technology. Based in London.",
  openGraph: {
    title: 'Laks Alagappan - AI Thought Leader',
    description:
      "Laks Alagappan · VP of Technology at Genpact. Writing on AI, agentic systems, and scaling enterprise technology. Based in London.",
    url: 'https://laks.london',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Laks Alagappan - AI Thought Leader',
    description:
      "Laks Alagappan · VP of Technology at Genpact. Writing on AI, agentic systems, and scaling enterprise technology. Based in London.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
