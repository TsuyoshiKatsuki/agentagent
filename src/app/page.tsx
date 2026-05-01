import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Service from "@/components/Service";
import Pricing from "@/components/Pricing";
import Area from "@/components/Area";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Concept />
        <Service />
        <Pricing />
        <Area />
      </main>
      <Footer />
    </>
  );
}
