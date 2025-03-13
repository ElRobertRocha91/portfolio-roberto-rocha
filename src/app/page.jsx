import Image from "next/image";
import Icons from "@/components/ui/icons";
import ButtonLinks from "@/components/ui/buttonLinks";
import "./globals.css";

export default function Home() {
  return (
    <main className="">
      {/* HOME SECTION */}
      <section id="home" className="flex-direccion lg:flex items-center justify-center min-h-screen">
        <figure className="flex justify-center mt-14 mb-2 lg:w-1/3">
          <Image src="/foto.jpeg" width={250} height={250} priority={true} className="rounded-full brightness-100 px-2 my-2 md:h-96 md:w-96 -z-10" alt="Photo-Perfil" />
        </figure>
        <article className="flex-direccion text-center justify-center px-2 lg:w-2/3 md:mt-28 lg:text-left">
          <h1 className="text-white font-bold text-4xl">Hi, It's <span className="text-[#00ffee]">Roberto</span></h1>
          <h1 className="text-white font-bold text-4xl">I'm a <span className="text-[#00ffee]">Developer Frontend</span></h1>
          <p className="px-6 py-2 text-justify text-lg lg:text-left md:px-0">
            Interested and passionate about technology, I starded my training at the Nacional Technological University "UTN"
            as a University Technician in Programing. I am currently acquiring new knowledge and applying it in proyects,
            which demonstrate my skills in programming and the knowledge acquired at the university.
          </p>
          {/* ICONOS */}
          <Icons />
          {/* LINKS */}
          <ButtonLinks />
        </article>
      </section>
      {/* SECTION ABOUT ME */}
      <section id="about" className="flex-col justify-center h-screen pt-8 bg-black">
        <h1 className="text-center font-bold text-4xl my-8 py-2">About <span className="text-[#00ffee]">me</span></h1>
        <div className="flex-col lg:flex lg:flex-row justify-center items-centar content-center lg:p-2">
          <article className="lg:w-3/5 lg:h-full lg:max-h-80">
            <p className="text-center text-lg text-justify p-4">
              Hello, my name is Roberto Rocha, I am a full stack developer with Front End orientation.
              I am passionate about creating efficient, secure and high quality solutions, so I am constantly looking to learn and
              improve my technical skills. My goal is software development, through clean architectures and solid development methodologies.
              <br />
              I am currently studying a University Degree in Programming at the National Technological University, 
              I also have completed university studies as a Bachelor in Business Administration. 
              I have 5 years of work experience working in Retail companies (COTO C.I.C.S.A, Jumbo Retail Cencosud S.A. and Coppel S.A.), as a cashier, 
              customer service representative and E-Commerce administrative.
              <br />
              I consider myself a proactive, responsible and organised person, with good interpersonal skills and a focus on teamwork and the customer. 
              I am enthusiastic about new learning and growth opportunities, as well as being able to contribute to innovative projects. If you are looking 
              for a person for your company with a strong desire to grow, contribute and work as part of a team, you are looking at the right profile. You can contact me privately 
              and I will be happy to tell you about my skills and experience.
            </p>
          </article>
          <figure className="flex justify-center p-2 m-2">
            <Image src="/foto.jpeg" width={400} height={400} priority={true} alt="Photo-Perfil" className="rounded-xl lg:p-2" />
          </figure>
        </div>
      </section>
    </main>
  );
}
