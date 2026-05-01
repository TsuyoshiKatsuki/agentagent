const services = [
  {
    title: "壁掛けエアコン",
    en: "AIR CONDITIONER",
    desc: "分解洗浄でカビ・ホコリを徹底除去。\n清潔な空気環境を取り戻します。",
    image:
      "https://images.unsplash.com/photo-1631545806609-e57d92cf7e93?w=900&auto=format&fit=crop",
  },
  {
    title: "お風呂",
    en: "BATHROOM",
    desc: "鏡のウロコ、床の黒ずみ、\n排水口まで丁寧に磨き上げます。",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&auto=format&fit=crop",
  },
  {
    title: "キッチン",
    en: "KITCHEN",
    desc: "コンロ・換気扇・シンク・五徳。\n油汚れも新品同様の輝きへ。",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop",
  },
  {
    title: "トイレ",
    en: "TOILET",
    desc: "便器・床・壁・換気扇まで。\n見えない汚れも除菌洗浄。",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=900&auto=format&fit=crop",
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
              className="bg-white border border-border hover:border-[#b89968] transition-all group overflow-hidden"
            >
              <div
                className="aspect-[4/3] bg-[#0a1929]"
                style={{
                  backgroundImage: `linear-gradient(rgba(10,25,41,0.15), rgba(10,25,41,0.35)), url('${service.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="p-8 lg:p-9">
                <p className="text-[10px] tracking-[0.3em] text-[#b89968] mb-3">
                  {service.en}
                </p>
                <h3 className="font-serif text-xl mb-5 tracking-wider">
                  {service.title}
                </h3>
                <div className="gold-line w-10 mb-5" />
                <p className="text-xs leading-[2] text-muted whitespace-pre-line">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
