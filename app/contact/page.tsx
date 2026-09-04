import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';

export const dynamic = 'force-static';
export const metadata: Metadata = { title: 'お問い合わせ', description: '出演依頼、ヲタ芸スクール、所属チーム、スポンサーに関するお問い合わせ。' };

export default function ContactPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="inner-hero inner-contact contact-hero"><div className="inner-hero-bg"><picture><source media="(max-width: 720px)" srcSet="/assets/contact-hero-uno-mobile.jpg" /><img src="/assets/contact-hero-uno.jpg" alt="カードゲームを楽しむLumièreメンバー" /></picture></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / CONTACT</p><p className="kicker">START A CONVERSATION</p><h1>まだ輪郭のない<br />アイデアから。</h1><p>出演、レッスン、所属、スポンサー。まずはお気軽にお話しください。</p></div><span className="inner-hero-number">04</span></section>

      <section className="section contact-guide">
        <div className="section-label"><span>01</span> HOW TO CONTACT</div><div className="contact-guide-heading"><p className="kicker">CHOOSE A CHANNEL</p><h2>ご都合のよい方法で、<br /><em>ご相談ください。</em></h2></div>
        <div className="contact-guide-grid"><a href="https://lin.ee/F5EQxq5" target="_blank" rel="noreferrer"><span>01 / LINE</span><h3>お急ぎのご相談</h3><p>出演日程やレッスンについて、LINE公式アカウントから気軽にご相談いただけます。</p><i>↗</i></a><a href="mailto:otagei.fukyuu@gmail.com"><span>02 / MAIL</span><h3>資料を添えたご相談</h3><p>企画書やイベント概要がある場合は、メールでお送りください。</p><i>↗</i></a><a href="tel:08067027899"><span>03 / TEL</span><h3>お電話でのご相談</h3><p>受付時間 9:00–22:00。出演中などで応答できない場合は折り返します。</p><i>↗</i></a></div>
      </section>

      <section className="section faq-section">
        <div className="section-label"><span>02</span> FAQ</div><div className="faq-heading"><p className="kicker">QUESTIONS</p><h2>よくあるご質問。</h2></div>
        <div className="faq-list">
          <details><summary><span>Q</span>どのようなイベントに出演できますか？<i>＋</i></summary><p>地域のお祭り、企業イベント、学校行事、商業施設、式典など幅広く対応します。屋内・屋外やステージ規模も含め、まずは企画内容をお聞かせください。</p></details>
          <details><summary><span>Q</span>ヲタ芸を知らない観客でも楽しめますか？<i>＋</i></summary><p>はい。初めて見る方にも伝わる構成と、会場を巻き込む演出を大切にしています。年齢を問わずお楽しみいただけます。</p></details>
          <details><summary><span>Q</span>スクールは未経験でも参加できますか？<i>＋</i></summary><p>もちろんです。サイリウムの持ち方や基本動作から丁寧にお伝えします。親子参加やオンライン受講も歓迎しています。</p></details>
          <details><summary><span>Q</span>スポンサーの支援内容は相談できますか？<i>＋</i></summary><p>ご予算や目的に合わせて、出演、コラボレーション、SNSでの発信など柔軟にご相談いただけます。具体的な金額はお問い合わせ後にご提案します。</p></details>
          <details><summary><span>Q</span>所属チームになるための条件はありますか？<i>＋</i></summary><p>活動地域や年数だけで判断することはありません。チームの活動内容やこれから挑戦したいことを伺い、最適な連携方法を一緒に考えます。</p></details>
        </div>
      </section>
      <ContactSection /><SiteFooter />
    </main>
  );
}
