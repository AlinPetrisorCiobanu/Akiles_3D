import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/hero/Hero";
import WhatsAppButton from "../../components/common/whatsAppButton/whatsAppButton";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatsAppButton />
    </>
  );
}

export default Home;