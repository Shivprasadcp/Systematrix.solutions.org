import Clients from "@/sections/Clients";
import Contactus from "@/sections/Contactus";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Team from "@/sections/Team";
import Image from "next/image";

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
      </main>
    </>
  );
}
