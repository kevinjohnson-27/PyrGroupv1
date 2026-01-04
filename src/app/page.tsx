import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Service";
import WeAssureYou from "@/components/WeAssureYou";
import Footer from "@/components/Footer";
import Testimoniel from "@/components/Testimoniel";
import AboutSection from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      {/* <WeAssureYou /> */}
      <Testimoniel />
      <Footer />
    </>
  );
}
