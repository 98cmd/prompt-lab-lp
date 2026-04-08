// サイトURL: 環境変数 > Vercel自動設定 > デフォルト の優先順位
// Vercelデプロイでは VERCEL_PROJECT_PRODUCTION_URL が自動で設定される
// カスタムドメイン設定時は NEXT_PUBLIC_SITE_URL を環境変数に設定すること
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://ai-venture-partner-lp.vercel.app");
