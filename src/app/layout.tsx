import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt LAB | COMON CENTER",
  description:
    "AIエージェントによる業務変革。月額10万円から、30名体制を2名+AIに。導入初期費用0円。",
  openGraph: {
    title: "AI Prompt LAB | COMON CENTER",
    description:
      "AIを導入するのではなく、AIと経営する。月額制AIエージェント導入パートナー。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Outfit:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AI Prompt LAB",
              alternateName: "AIプロンプトラボ",
              url: SITE_URL,
              description:
                "AIエージェントによる業務変革。月額制で企業のオペレーション自動化を支援。",
              address: {
                "@type": "PostalAddress",
                streetAddress: "九段南1-5-6 りそな九段ビル 5F",
                addressLocality: "千代田区",
                addressRegion: "東京都",
                postalCode: "102-0074",
                addressCountry: "JP",
              },
              parentOrganization: {
                "@type": "Organization",
                name: "株式会社COMON CENTER",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
