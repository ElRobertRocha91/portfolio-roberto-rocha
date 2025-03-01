import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "RobertoRocha.com",
  description: "Website developme by Roberto Rocha, this professional portfolio uses the development environment provided by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
