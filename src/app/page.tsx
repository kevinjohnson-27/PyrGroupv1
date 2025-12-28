import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Service";
import WeAssureYou from "@/components/WeAssureYou";
import Footer from "@/components/Footer";
import Testimoniel from "@/components/Testimoniel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WeAssureYou />
      <Testimoniel />
      <Footer />
    </>
  );
}
