import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/hero/Hero";
import WhatsAppButton from "../../components/common/whatsAppButton/whatsAppButton";
import Footer from "../../components/layout/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Home;