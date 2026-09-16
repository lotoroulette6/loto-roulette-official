'use strict';
// URL設定はこのブロックだけを編集します。詳しくは ../ASSET_GUIDE.md を参照。
// 確認済みURLを半角の '' の間に1行で貼り付け、引用符・カンマ・キー名を残してください。
// 未確定の項目は空欄のままにします（リンクは無効表示）。仮URLは入力しません。
// 前後の空白・改行を含めないでください。お問い合わせ以外は https:// で始めます。
const SITE_LINKS = {
  appStore: 'https://apps.apple.com/jp/app/%E3%83%AD%E3%83%88%E3%83%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88/id6802570461', // App Store：3つのダウンロードボタン＋フッター
  x: 'https://x.com/o5iefbcmn858650', // 公式X：最新情報セクション＋フッター
  youtube: 'https://www.youtube.com/@ロトルーレット', // 公式YouTube：最新情報セクション＋フッター
  privacy: 'https://lotoroulette6.github.io/lotoroulette6-support/privacy.html', // プライバシーポリシー：フッター
  contact: 'mailto:hidehirokoyamachi+supp@gmail.com?subject=%E3%83%AD%E3%83%88%E3%83%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88%20%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B' // お問い合わせ：フッター。https:// または mailto: で始めます。
};

document.documentElement.classList.add('js');
document.querySelectorAll('[data-link]').forEach(link => {
  const value = SITE_LINKS[link.dataset.link];
  if (value && (/^https:\/\//.test(value) || (link.dataset.link === 'contact' && /^mailto:/.test(value)))) {
    link.href = value;
    link.removeAttribute('aria-disabled');
    link.classList.remove('pending-link');
  } else {
    link.title = 'リンク準備中';
    link.setAttribute('role', 'link');
    link.setAttribute('tabindex', '0');
    link.setAttribute('aria-label', link.textContent.trim() + '（リンク準備中）');
  }
});
if (SITE_LINKS.appStore) document.querySelector('.availability').textContent = 'iPhoneアプリ';

// 正式画像を指定の場所に置けば、自動的に表示されます。
document.querySelectorAll('img[data-fallback]').forEach(img => {
  const showFallback = () => { img.hidden = true; img.nextElementSibling.hidden = false; };
  img.addEventListener('error', showFallback);
  if (img.complete && img.naturalWidth === 0) showFallback();
});
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.hidden = false;
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); }
});
matchMedia('(min-width: 768px)').addEventListener('change', closeMenu);
// FAQ は標準の details / summary。JavaScriptを無効にしても操作でき、
// 開閉状態がブラウザから読み上げ機能へ自動的に伝わります。
