import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "月島ハウスクリーニング｜月島・豊洲・勝どきエリア専門",
  description:
    "月島・豊洲・勝どきエリア専門の高品質ハウスクリーニング。スーツでお伺いし、丁寧で上質な仕上がりをお約束します。エアコン・お風呂・キッチン・トイレのセットで税込55,000円。",
  openGraph: {
    title: "月島ハウスクリーニング",
    description: "月島・豊洲・勝どきエリア専門の高品質ハウスクリーニング",
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
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
