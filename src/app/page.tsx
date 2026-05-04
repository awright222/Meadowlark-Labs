import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Philosophy from "@/components/Philosophy";
import SelectWork from "@/components/SelectWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Products />
        <Philosophy />
        <SelectWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
