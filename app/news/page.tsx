import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';
import { upcoming } from '../data';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: '出演情報・お知らせ',
  description: '一般社団法人ヲタ芸普及協会とLumièreの出演情報、重要なお知らせ。',
};

const notices = [
  { pinned: true, date: '2026.09.01', title: '11月3日 千葉日報カルチャー祭 開催延期のお知らせ', text: '11月3日に予定されていたカルチャー祭は延期となりました。新しい日程が決まり次第、改めてお知らせします。' },
  { pinned: true, date: '2026.09.01', title: '出演情報・お知らせページを開設しました', text: '重要なお知らせはこの位置に固定して掲載します。' },
  { pinned: false, date: '2026.03', title: 'ホノルルフェスティバル2026 出演', text: '協会所属チームLumièreが海外ステージへ出演しました。' },
  { pinned: false, date: '2026', title: '第3回パフォーマーカップ 優勝', text: '応援してくださった皆さまへ、心より御礼申し上げます。' },
];

export default function NewsPage() {
  return <main id="top"><SiteHeader />
    <section className="inner-hero journal-hero news-hero"><div className="inner-hero-bg"><img src="/assets/news-hero-kimitsu.jpg" alt="君津市房総フェスタでのLumièreのヲタ芸パフォーマンス" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / NEWS</p><p className="kicker">LIVE INFO / IMPORTANT NEWS</p><h1>次に会える場所と、<br />大切なお知らせ。</h1><p>出演予定、活動に関するご案内、協会からの重要なお知らせをまとめています。</p></div><span className="inner-hero-number">03</span></section>

    <section className="news section news-page">
      <div className="section-label light"><span>03</span> APPEARANCE SCHEDULE</div>
      <div className="news-heading"><div><p className="kicker">UPCOMING / 2026</p><h2>出演情報。</h2></div><p>日程・会場は変更になる場合があります。最新情報は各主催者の案内もあわせてご確認ください。</p></div>
      <div className="schedule">{upcoming.map((event,index) => <div className="schedule-row schedule-row-static" key={`${event.date}-${event.title}`}><span className="schedule-index">{String(index + 1).padStart(2,'0')}</span><time><b>{event.date}</b><small>{event.day}</small></time><span className="schedule-title">{event.title}</span><span className="schedule-area">{event.area}</span></div>)}</div>
      <div className="wp-news-block"><div className="wp-news-title"><span>NEWS</span><h3>お知らせ</h3></div><div className="wp-news-grid">{notices.map(item => <a href="/blog" key={item.title} className={item.pinned ? 'is-pinned' : undefined}><time>{item.pinned ? 'PINNED / ' : ''}{item.date}</time><h4>{item.title}</h4><p>{item.text}</p><span>READ ↗</span></a>)}</div></div>
    </section>
    <ContactSection /><SiteFooter />
  </main>;
}
