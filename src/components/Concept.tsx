export default function Concept() {
  return (
    <section id="concept" className="py-24 md:py-36 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[#b89968] text-xs tracking-[0.5em] mb-4">CONCEPT</p>
          <div className="gold-line w-20 mx-auto mb-8" />
          <h2 className="font-serif text-2xl md:text-4xl leading-[1.6] text-foreground">
            ホテルライクな対応を、
            <br />
            ご自宅で。
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mt-20">
          <div className="text-center">
            <div className="font-serif text-4xl text-[#b89968] mb-6">01</div>
            <h3 className="font-serif text-lg mb-4 tracking-wider">スーツでお伺い</h3>
            <p className="text-sm leading-[2] text-muted">
              清潔感あるスーツ姿のスタッフが
              <br />
              お客様のご自宅へ訪問いたします。
            </p>
          </div>

          <div className="text-center">
            <div className="font-serif text-4xl text-[#b89968] mb-6">02</div>
            <h3 className="font-serif text-lg mb-4 tracking-wider">徹底した品質</h3>
            <p className="text-sm leading-[2] text-muted">
              プロの知識と技術で
              <br />
              細部まで丁寧に仕上げます。
            </p>
          </div>

          <div className="text-center">
            <div className="font-serif text-4xl text-[#b89968] mb-6">03</div>
            <h3 className="font-serif text-lg mb-4 tracking-wider">エリア専門</h3>
            <p className="text-sm leading-[2] text-muted">
              月島・豊洲・勝どきに特化し
              <br />
              迅速かつ細やかな対応を実現。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
