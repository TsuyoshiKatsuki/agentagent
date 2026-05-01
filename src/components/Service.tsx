const services = [
  {
    title: "壁掛けエアコン",
    en: "AIR CONDITIONER",
    desc: "分解洗浄でカビ・ホコリを徹底除去。\n清潔な空気環境を取り戻します。",
  },
  {
    title: "お風呂",
    en: "BATHROOM",
    desc: "鏡のウロコ、床の黒ずみ、\n排水口まで丁寧に磨き上げます。",
  },
  {
    title: "キッチン",
    en: "KITCHEN",
    desc: "コンロ・換気扇・シンク・五徳。\n油汚れも新品同様の輝きへ。",
  },
  {
    title: "トイレ",
    en: "TOILET",
    desc: "便器・床・壁・換気扇まで。\n見えない汚れも除菌洗浄。",
  },
];

export default function Service() {
  return (
    <section id="service" className="py-24 md:py-36 bg-[#f5f3ed]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[#b89968] text-xs tracking-[0.5em] mb-4">SERVICE</p>
          <div className="gold-line w-20 mx-auto mb-8" />
          <h2 className="font-serif text-2xl md:text-4xl leading-[1.6] text-foreground">
            すべてが揃う、
            <br className="md:hidden" />
            セットプラン。
          </h2>
          <p className="mt-6 text-muted text-sm leading-[2]">
            ご家庭で特に気になる4箇所を、まとめてプロの仕上がりに。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 lg:p-10 border border-border hover:border-[#b89968] transition-all group"
            >
              <p className="text-[10px] tracking-[0.3em] text-[#b89968] mb-3">
                {service.en}
              </p>
              <h3 className="font-serif text-xl mb-6 tracking-wider">
                {service.title}
              </h3>
              <div className="gold-line w-10 mb-6" />
              <p className="text-xs leading-[2] text-muted whitespace-pre-line">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
