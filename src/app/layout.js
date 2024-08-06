import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MobileBottomNav from "@/components/MobileBottomNav";
import TitleProvider from "@/context/TitleProvider";
import NextTopLoader from "nextjs-toploader";
import SideNav from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bisola's Code Playground",
  description: "Have Fun While Building!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#1814F3" />
        <main className="bg-[#F5F7FA] min-h-dvh flex mx-auto">
          <SideNav />

          <TitleProvider>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex flex-col flex-1">
                <Header />
                <div className="px-4 md:px-8 lg:px-10 py-9 flex-1 flex flex-col max-md:w-screen">
                  {children}
                </div>
              </div>

              <MobileBottomNav />
            </div>
          </TitleProvider>
        </main>
      </body>
    </html>
  );
}
