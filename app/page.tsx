import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Band from "@/components/Band";
import About from "@/components/About";
import Work from "@/components/Work";
import Apps from "@/components/Apps";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Band />
        <About />
        <Work />
        <Apps />
        <Services />
        <Experience />
        <Contact />
      </main>
      <footer>
        <div className="wrap">
          <span>&copy; {new Date().getFullYear()} Huzaifa Shahid</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
