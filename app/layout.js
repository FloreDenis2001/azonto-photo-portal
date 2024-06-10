import { Outfit } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import MobileNavigation from "./_components/MobileNavigation";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Azonto Studio",
  description: "Photography Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="bg-neutral-900 grid place-items-center">
          <ToastContainer />
          <div className="bg-neutral-900 xl:max-w-[1275px]">
            <Header />
            <MobileNavigation />
            {children}
            <Footer />
          </div>
        </div>

      </body>
    </html>
  );
}
