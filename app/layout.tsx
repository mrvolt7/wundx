import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cairo, Tajawal } from 'next/font/google'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-cairo',
})

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
})

export const metadata: Metadata = {
  title: 'ووندكس WUNDX | تقنية علوم الحياة المعتمدة على الترددات',
  description:
    'ووندكس (WUNDX) جهاز طبي غير تدخلي يعتمد على تقنية الترددات لدعم التئام الجروح، والتحكم في النشاط البكتيري، وتحفيز ترميم الأنسجة. أول شركة مصرية تعمل على تطوير تقنيات علوم الحياة المعتمدة على الترددات FDL.',
  keywords: [
    'ووندكس',
    'WUNDX',
    'الترددات',
    'FDL',
    'علوم الحياة',
    'التئام الجروح',
    'جهاز طبي غير تدخلي',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'ووندكس WUNDX | تقنية علوم الحياة المعتمدة على الترددات',
    description:
      'جهاز طبي غير تدخلي يعتمد على تقنية الترددات لدعم التئام الجروح وترميم الأنسجة.',
    type: 'website',
    locale: 'ar_EG',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b2a4a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${tajawal.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
