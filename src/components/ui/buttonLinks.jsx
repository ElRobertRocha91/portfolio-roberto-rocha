import Link from "next/link"

export default function ButtonLinks() {
    return (
        <div className="flex justify-center lg:justify-start lg:my-4">
            <Link href="#" className="py-2 px-4 mx-2 rounded-full border-2 border solid border-[#00ffee] text-[#00ffee] hover:shadow-[0_1px_18px_5px_#00ffee] transition-shadow duration-700 transition ease-in-out hover:scale-105">Download CV</Link>
            <Link href="#contact" className="py-2 px-4 mx-2 rounded-full border-2 border solid border-[#00ffee] bg-[#00ffee] hover:bg-[#0a0a0a] text-black hover:text-[#00ffee] hover:shadow-[0_1px_18px_5px_#00ffee] transition-shadow duration-700 transition ease-in-out hover:scale-110">Contact</Link>
        </div>
    )
}