import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FelixAI — AI-Powered Procurement Intelligence for the GCC',
  description:
    'Win more government tenders across the GCC with AI-powered bid intelligence. Discover opportunities, draft compliant responses, and close deals faster with FelixAI.',
  keywords: [
    'procurement',
    'GCC tenders',
    'AI bidding',
    'government contracts',
    'Qatar procurement',
    'UAE tenders',
    'Saudi Arabia procurement',
    'RFP automation',
    'bid management',
    'tender intelligence',
  ],
  openGraph: {
    title: 'FelixAI — AI-Powered Procurement Intelligence for the GCC',
    description:
      'Win more government tenders across the GCC with AI-powered bid intelligence.',
    url: 'https://felixai.io',
    siteName: 'FelixAI',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FelixAI — AI-Powered Procurement Intelligence for the GCC',
    description:
      'Win more government tenders across the GCC with AI-powered bid intelligence.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white antialiased">{children}</body>
    </html>
  )
}
