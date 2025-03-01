import Link from "next/link";

export default function ListMenu() {
    return (
        <div className="lg:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transform transition-all duration-700 ease-in`} >
                <Link href="/#" className="block pt-2 text-center hover:text-[#00ffee]">Home</Link>
                <Link href="/#" className="block pt-2 text-center hover:text-[#00ffee]">Education</Link>
                <Link href="/#" className="block pt-2 text-center hover:text-[#00ffee]">Services</Link>
                <Link href="/#" className="block pt-2 text-center hover:text-[#00ffee]">Proyects</Link>
                <Link href="/#" className="block pt-2 text-center hover:text-[#00ffee]">Contact</Link>
            </div>
        </div>
    )
}