import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a1929] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex flex-col leading-none mb-6">
              <span className="font-serif text-xl tracking-[0.2em]">月島</span>
              <span className="text-[10px] tracking-[0.4em] text-[#b89968] mt-1">
                HOUSE CLEANING
              </span>
            </div>
            <p className="text-xs text-white/60 leading-[2]">
              月島・豊洲・勝どきエリア専門の
              <br />
              ハウスクリーニングサービス。
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.4em] text-[#b89968] mb-5">
              CONTACT
            </p>
            <p className="text-xs text-white/80 leading-[2]">
              受付時間：9:00 〜 19:00
              <br />
              定休日：年中無休
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.4em] text-[#b89968] mb-5">
              MENU
            </p>
            <ul className="space-y-3 text-xs text-white/80">
              <li>
                <a href="#concept" className="hover:text-[#b89968] transition-colors">
                  コンセプト
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-[#b89968] transition-colors">
                  サービス内容
                </a>
              </li>
              <li>
                <a href="#price" className="hover:text-[#b89968] transition-colors">
                  料金
                </a>
              </li>
              <li>
                <Link href="/booking" className="hover:text-[#b89968] transition-colors">
                  ご予約
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-16 mb-6" />
        <p className="text-[10px] text-white/40 tracking-widest text-center">
          © {new Date().getFullYear()} 月島ハウスクリーニング. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
