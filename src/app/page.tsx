// import Clients from "@/sections/Clients";
// import Contactus from "@/sections/Contactus";
// import Footer from "@/sections/Footer";
// import Hero from "@/sections/Hero";
// import Projects from "@/sections/Projects";
// import Team from "@/sections/Team";


// export default function Home() {
//   return (
//     <>
//       <main>
//         {/*Hero*/}
//         <Hero />
//         <Projects />
//         <Clients />
//         <Contactus />
//         <Team />
//         <Footer/>
//       </main>
//     </>
//   );
// }


import Clients from "@/sections/Clients";
import Contactus from "@/app/Api/Contactus";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Team from "@/sections/Team";

export default function Home() {
  return (
    <>
      <main>

        <section id="home">
          <Hero />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="clients">
          <Clients />
        </section>

        <section id="team">
          <Team />
        </section>

        <section id="contactus">
          <Contactus />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
