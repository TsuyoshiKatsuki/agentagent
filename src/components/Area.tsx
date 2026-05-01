export default function Area() {
  return (
    <section id="area" className="py-24 md:py-36 bg-[#f5f3ed]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[#b89968] text-xs tracking-[0.5em] mb-4">AREA</p>
          <div className="gold-line w-20 mx-auto mb-8" />
          <h2 className="font-serif text-2xl md:text-4xl leading-[1.6] text-foreground">
            対応エリア。
          </h2>
          <p className="mt-6 text-muted text-sm leading-[2]">
            この3エリアに特化することで、迅速で丁寧なサービスを実現しています。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { jp: "月島", en: "TSUKISHIMA" },
            { jp: "豊洲", en: "TOYOSU" },
            { jp: "勝どき", en: "KACHIDOKI" },
          ].map((area) => (
            <div
              key={area.jp}
              className="bg-white py-12 px-8 text-center border border-border hover:border-[#b89968] transition-all"
            >
              <p className="text-[10px] tracking-[0.4em] text-[#b89968] mb-4">
                {area.en}
              </p>
              <h3 className="font-serif text-3xl tracking-[0.2em]">{area.jp}</h3>
              <div className="gold-line w-10 mx-auto my-6" />
              <p className="text-xs text-muted">中央区・江東区</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-12 leading-relaxed">
          ※上記エリア外につきましては、お問い合わせください。
        </p>
      </div>
    </section>
  );
}
