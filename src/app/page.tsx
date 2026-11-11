import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Philosophy from "@/components/Philosophy";
import SelectWork from "@/components/SelectWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Products />
        <Philosophy />
        <SelectWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
