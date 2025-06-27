import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
