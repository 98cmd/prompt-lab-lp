import type { Metadata } from "next";
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
