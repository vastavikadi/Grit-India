import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThreeDCardDemo from "@/components/3dcard";
import ImagesSliderDemo from "@/components/imageslider";
import AppleCardsCarouselDemo from "@/components/cards";
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GritIndia",
  description: "Explore diverse Cultures of India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ImagesSliderDemo/>
        <ThreeDCardDemo />
       <div className="relative h-50 flex items-center justify-center">
  <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 [text-shadow:0_0_rgba(0,0,0,0.1)] max-w-screen-sm text-2xl font-semibold text-center">
    <span>As we honor the legacy of our forefathers, join us in taking an oath to preserve the Culture&#127994;</span>
  </div>
</div>
{children}
<AppleCardsCarouselDemo/>
        <hr/>
        <Footer/>
        </body>
    </html>
  );
}
