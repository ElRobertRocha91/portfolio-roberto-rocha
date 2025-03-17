import Link from "next/link";

export default function ListMenu({ onClick }) {
    return (
        <div className="lg:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transform transition-all duration-700 ease-in`} >
                <Link href="#home" onClick={onClick} className="block pt-2 text-center hover:text-[#00ffee]">Home</Link>
                <Link href="#about" onClick={onClick} className="block pt-2 text-center hover:text-[#00ffee]">About</Link>
                <Link href="#education" onClick={onClick} className="block pt-2 text-center hover:text-[#00ffee]">Education</Link>
                <Link href="#services" onClick={onClick} className="block pt-2 text-center hover:text-[#00ffee]">Services</Link>
                <Link href="#proyects" onClick={onClick} className="block pt-2 text-center hover:text-[#00ffee]">Proyects</Link>
                <Link href="#contact" onClick={onClick} className="block pt-2 text-center hover:text-[#00ffee]">Contact</Link>
            </div>
        </div>
    )
}