import Image from "next/image";
import Icons from "@/components/ui/icons";
import ButtonLinks from "@/components/ui/buttonLinks";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      {/* HOME SECTION */}
      <section id="home" className="lg:flex">
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
    </main>
  );
}
