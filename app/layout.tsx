import type { Metadata } from 'next';
import './globals.css';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL('https://lumiere-woodbell.com'),
  title: {
    default: '一般社団法人ヲタ芸普及協会 | ヲタ芸を、次の文化へ。',
    template: '%s | 一般社団法人ヲタ芸普及協会',
  },
  description: 'ヲタ芸文化の普及・育成・地域連携に取り組む一般社団法人ヲタ芸普及協会。イベント出演、映画振付、スクール、所属チーム・スポンサーを募集中。',
  keywords: ['Lumière', 'ルミエール', 'ヲタ芸', 'ヲタ芸チーム', 'イベント出演', 'ヲタ芸スクール', '千葉県', 'いすみ市'],
  alternates: { canonical: '/' },
  icons: { icon: '/assets/logo.jpg' },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    siteName: '一般社団法人ヲタ芸普及協会',
    title: 'ヲタ芸を、次の文化へ。 | 一般社団法人ヲタ芸普及協会',
    description: '育成・公演・地域連携を通して、誰もが光を放てる未来をつくります。',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'ヲタ芸を、次の文化へ。一般社団法人ヲタ芸普及協会' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ヲタ芸を、次の文化へ。 | 一般社団法人ヲタ芸普及協会',
    description: '育成・公演・地域連携を通して、誰もが光を放てる未来をつくります。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
