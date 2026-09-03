export const youtubeChannel = 'https://www.youtube.com/@%E3%83%AB%E3%83%9F%E3%82%A8%E3%83%BC%E3%83%AB2024';
export const youtubeSearch = (query: string) => `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

export const upcoming = [
  { date: '09.12', day: 'SAT', title: '町田八幡神社大祭', area: '千葉県' },
  { date: '09.13', day: 'SUN', title: '野田ハロウィンフェスタ', area: '千葉県野田市' },
  { date: '09.19', day: 'SAT', title: 'キッチンカーフェスタ', area: '千葉県袖ケ浦市' },
  { date: '09.26', day: 'SAT', title: '君津ふれあい祭り', area: '千葉県君津市' },
  { date: '09.26', day: 'SAT', title: '東の原公園祭り', area: '千葉県' },
  { date: '09.27', day: 'SUN', title: '市津祭り', area: '千葉県市原市' },
  { date: '10.17–18', day: 'SAT–SUN', title: 'MAZDA新港店イベント', area: '千葉県千葉市' },
  { date: '11.03', day: '延期', title: '千葉日報カルチャー祭（開催延期）', area: '新日程は後日お知らせ' },
];

export const members = [
  { name: 'KEJAN', jp: 'ケジャン', role: 'リーダー・振付', image: '/assets/member-kejan.jpg' },
  { name: 'SUBARU', jp: 'スバル', role: 'サブリーダー・講師', image: '/assets/member-subaru.jpg' },
  { name: 'CHLOE', jp: 'クロエ', role: '映像編集・パフォーマー', image: '/assets/member-chloe.jpg' },
  { name: 'HIRO', jp: 'ヒロ', role: 'サポートメンバー', image: '/assets/member-hiro.jpg' },
  { name: 'AOZERO', jp: '青零', role: 'サポートメンバー', image: '/assets/member-seirei.jpg' },
  { name: 'SORYU', jp: 'ソリュ', role: 'パフォーマー', image: '/assets/member-soryu.jpg' },
  { name: 'YOSHIKI', jp: 'ヨシキ', role: 'パフォーマー', image: '/assets/member-yoshiki.jpg' },
];

export const history = [
  {
    year: '2026', title: '世界へ、そして次の頂点へ。',
    items: ['ホノルルフェスティバル2026 出演', '第3回パフォーマーカップ 優勝', '東京ドイツ村・千葉日報カルチャー祭', '四街道わくわくフェス・北条ビーチマーケット', '地域新聞社イベント・平井花火・高洲祭り'],
    href: 'https://www.youtube.com/watch?v=47wKIysCJ58',
  },
  {
    year: '2025', title: '映画・メディアへ活動を拡張。',
    items: ['映画ヲタ芸振付・企業公演', 'さんばしまつり花火大会 大トリ前座', 'チバテレ・ラジオ出演', '銀座・築地・イオンほか多数公演'],
    href: youtubeSearch('ルミエール ヲタ芸 2025'),
  },
  {
    year: '2024', title: 'パフォーマーカップ 優勝。',
    items: ['JRイベント公演', '四街道中央公園', '市原市学校・船橋イオン', 'パフォーマーカップ優勝'],
    href: youtubeSearch('ルミエール パフォーマーカップ 2024'),
  },
  {
    year: '2023–22', title: '一本の光から始まった。',
    items: ['房総フェスタ', '市原市学校公演', 'いすみの晩・12名でヲタ芸披露'],
    href: youtubeSearch('ルミエール ヲタ芸 千葉'),
  },
];

export const supporters = [
  'アイドルカフェ', '居酒屋とんちゃん', 'さくら子庵株式会社', '株式会社エステック',
  'Lecrat corporation', '太海海釣りセンター', '松鶴丸', '風鈴堂',
  '薪ストーブ専門店ドリームファイヤー', '楽ちん堂美容室',
];
