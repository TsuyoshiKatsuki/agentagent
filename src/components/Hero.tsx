import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1929]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(184, 153, 104, 0.3), transparent 50%), radial-gradient(circle at 70% 80%, rgba(184, 153, 104, 0.2), transparent 50%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1929]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center fade-in">
        <p className="text-[#b89968] text-sm tracking-[0.5em] mb-8">
          TSUKISHIMA · TOYOSU · KACHIDOKI
        </p>
        <div className="gold-line w-32 mx-auto mb-10" />
        <h1 className="font-serif text-white text-3xl md:text-5xl lg:text-6xl leading-[1.4] mb-12">
          上質を、暮らしの隅々まで。
        </h1>
        <p className="text-white/80 text-base md:text-lg leading-[2.2] max-w-2xl mx-auto mb-14">
          月島・豊洲・勝どきエリアに特化した
          <br className="md:hidden" />
          ハウスクリーニング専門サービス。
          <br />
          スーツに身を包んだ熟練のスタッフが、
          <br className="md:hidden" />
          上質な空間をお届けいたします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="px-10 py-4 bg-[#b89968] text-white tracking-[0.3em] text-sm hover:bg-[#8b7448] transition-all"
          >
            ご予約はこちら
          </Link>
          <a
            href="#price"
            className="px-10 py-4 border border-white/40 text-white tracking-[0.3em] text-sm hover:border-[#b89968] hover:text-[#b89968] transition-all"
          >
            料金を見る
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
          <div className="w-[1px] h-12 bg-white/40" />
        </div>
      </div>
    </section>
  );
}
