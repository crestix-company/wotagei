import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://lumiere-woodbell.com'),
  title: {
    default: 'Lumière | 光で魅せるヲタ芸エンターテインメント',
    template: '%s | Lumière',
  },
  description: '一般社団法人ヲタ芸普及協会所属チームLumière。イベント出演、映画振付、ヲタ芸スクール、スポンサー・所属チームを募集中。',
  keywords: ['Lumière', 'ルミエール', 'ヲタ芸', 'ヲタ芸チーム', 'イベント出演', 'ヲタ芸スクール', '千葉県', 'いすみ市'],
  alternates: { canonical: '/' },
  icons: { icon: '/assets/logo.jpg' },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    siteName: 'Lumière / WOTA LIGHTING DANCE',
    title: '光を振れば、心が動く。 | Lumière',
    description: '千葉から全国へ、そして世界へ。光と熱狂を届けるヲタ芸チームLumière。',
    images: [{ url: '/og.png', width: 1536, height: 864, alt: '光を振れば、心が動く。Lumière' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '光を振れば、心が動く。 | Lumière',
    description: '千葉から全国へ、そして世界へ。光と熱狂を届けるヲタ芸チームLumière。',
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
