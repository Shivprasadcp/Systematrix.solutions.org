import Clients from "@/sections/Clients";
import Contactus from "@/sections/Contactus";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Team from "@/sections/Team";


export default function Home() {
  return (
    <>
      <main>
        {/*Hero*/}
        <Hero />
        <Projects />
        <Clients />
        <Contactus />
        <Team />
        <Footer/>
      </main>
    </>
  );
}
