import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import BenefitsDetails from "@/components/BenefitsDetails";
import CaseStudy from "@/components/CaseStudy";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <AboutUs />
        <Testimonials />
        <BenefitsDetails />
        <CaseStudy />
        <Blog />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
