import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="group">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[0.2em] text-white">
              月島
            </span>
            <span className="text-[10px] tracking-[0.4em] text-[#b89968] mt-1">
              HOUSE CLEANING
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm text-white/90">
          <a href="#concept" className="hover:text-[#b89968] transition-colors tracking-widest">
            CONCEPT
          </a>
          <a href="#service" className="hover:text-[#b89968] transition-colors tracking-widest">
            SERVICE
          </a>
          <a href="#price" className="hover:text-[#b89968] transition-colors tracking-widest">
            PRICE
          </a>
          <a href="#area" className="hover:text-[#b89968] transition-colors tracking-widest">
            AREA
          </a>
        </nav>
        <Link
          href="/booking"
          className="hidden md:inline-block px-6 py-3 border border-[#b89968] text-[#b89968] hover:bg-[#b89968] hover:text-white transition-all tracking-widest text-sm"
        >
          ご予約
        </Link>
      </div>
    </header>
  );
}
