import { Montserrat } from "next/font/google";
import "./global.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "CameraFlix",
  description: "Tu plataforma de streaming favorita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={montserrat.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}