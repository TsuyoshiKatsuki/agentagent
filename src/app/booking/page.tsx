import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "ご予約｜月島ハウスクリーニング",
  description: "月島・豊洲・勝どきエリアのハウスクリーニング予約フォーム",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#0a1929] py-6">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <Link href="/" className="inline-block">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-[0.2em] text-white">
                月島
              </span>
              <span className="text-[10px] tracking-[0.4em] text-[#b89968] mt-1">
                HOUSE CLEANING
              </span>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-20 md:py-28 bg-background">
        <div className="max-w-2xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b89968] text-xs tracking-[0.5em] mb-4">
              RESERVATION
            </p>
            <div className="gold-line w-20 mx-auto mb-8" />
            <h1 className="font-serif text-2xl md:text-4xl leading-[1.6]">
              ご予約フォーム
            </h1>
            <p className="mt-6 text-muted text-sm leading-[2]">
              下記フォームに必要事項をご記入ください。
              <br />
              担当者より24時間以内にご連絡いたします。
            </p>
          </div>

          <BookingForm />
        </div>
      </main>

      <footer className="bg-[#0a1929] text-white/40 py-6 text-center text-[10px] tracking-widest">
        © {new Date().getFullYear()} 月島ハウスクリーニング
      </footer>
    </div>
  );
}
