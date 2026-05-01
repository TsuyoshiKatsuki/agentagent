import Link from "next/link";

export default function Pricing() {
  return (
    <section id="price" className="py-24 md:py-36 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[#b89968] text-xs tracking-[0.5em] mb-4">PRICE</p>
          <div className="gold-line w-20 mx-auto mb-8" />
          <h2 className="font-serif text-2xl md:text-4xl leading-[1.6] text-foreground">
            明朗会計。
            <br className="md:hidden" />
            すべて込みのセット価格。
          </h2>
        </div>

        <div className="bg-[#0a1929] text-white p-10 md:p-16 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(184, 153, 104, 0.5), transparent 70%)",
            }}
          />

          <div className="relative">
            <p className="text-[#b89968] text-xs tracking-[0.5em] mb-6">
              STANDARD PLAN
            </p>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 leading-relaxed">
              4箇所セットプラン
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-[#b89968]">◆</span>
                  壁掛けエアコン 1台
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#b89968]">◆</span>
                  お風呂
                </li>
              </ul>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-[#b89968]">◆</span>
                  キッチン
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#b89968]">◆</span>
                  トイレ
                </li>
              </ul>
            </div>

            <div className="gold-line mb-10" />

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-xs text-white/60 tracking-widest mb-2">
                  TOTAL
                </p>
                <p className="font-serif text-5xl md:text-6xl text-[#b89968]">
                  ¥55,000
                  <span className="text-base text-white/70 ml-3 tracking-widest">
                    税込
                  </span>
                </p>
              </div>
              <Link
                href="/booking"
                className="px-10 py-4 bg-[#b89968] text-white tracking-[0.3em] text-sm hover:bg-[#8b7448] transition-all text-center"
              >
                このプランで予約
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 p-8 md:p-10 bg-white border border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#b89968] mb-2">
                OPTION
              </p>
              <h4 className="font-serif text-lg mb-2">埋め込み型エアコンの場合</h4>
              <p className="text-xs text-muted leading-relaxed">
                天井埋め込みタイプの場合、追加料金が発生いたします。
              </p>
            </div>
            <div className="text-right">
              <p className="font-serif text-2xl text-foreground">
                +¥15,000
                <span className="text-xs text-muted ml-2 tracking-wider">
                  税抜
                </span>
              </p>
              <p className="text-xs text-muted mt-1">（税込 ¥16,500）</p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted mt-10 leading-[2]">
          ※表示価格は1回のご訪問あたりの料金です。
          <br />
          ※駐車場が確保できない場合、別途コインパーキング代を頂戴いたします。
        </p>
      </div>
    </section>
  );
}
