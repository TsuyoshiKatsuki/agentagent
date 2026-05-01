const STAFF_IMAGE_URL =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop";

export default function Concept() {
  return (
    <section id="concept" className="py-24 md:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[#b89968] text-xs tracking-[0.5em] mb-4">CONCEPT</p>
          <div className="gold-line w-20 mx-auto mb-8" />
          <h2 className="font-serif text-2xl md:text-4xl leading-[1.6] text-foreground">
            ホテルライクな対応を、
            <br />
            ご自宅で。
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
          <div
            className="aspect-[4/5] bg-[#0a1929]"
            style={{
              backgroundImage: `linear-gradient(rgba(10,25,41,0.20), rgba(10,25,41,0.50)), url('${STAFF_IMAGE_URL}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div>
            <p className="text-[#b89968] text-[10px] tracking-[0.5em] mb-4">
              OUR STAFF
            </p>
            <h3 className="font-serif text-2xl md:text-3xl leading-[1.6] mb-8">
              一流のサービスは、
              <br />
              一流の佇まいから。
            </h3>
            <div className="gold-line w-16 mb-8" />
            <p className="text-sm leading-[2.2] text-muted">
              当社のスタッフは、お客様のご自宅へお伺いする際、
              全員がスーツを着用しております。
              <br />
              <br />
              清掃技術はもちろん、
              立ち振る舞いや言葉遣いに至るまで、
              一流ホテルのサービスマンと同等の品質を追求しております。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
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
