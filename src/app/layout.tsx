import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/ui/Navbar";
import { ToastContainer } from "react-toastify";
import QueryProvider from "@/utils/Provider";
import ScrollToTop from "@/utils/ScrollToTop/ScrollToTop";
import Footer from "@/ui/Footer";
import ScrollProgress from "@/components/ui/scroll-progress";
// import SplashCursor from "@/components/ui/SplashCursor";

const space_Grotesk = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress className="top-[0px]" />
          {/* <SplashCursor /> */}
          <div className="bg-slate-100 dark:bg-[#020617] min-h-screen bg-[linear-gradient(to_right,#80808011_1px,transparent_1px),linear-gradient(to_bottom,#80808011_1px,transparent_1px)] bg-[size:14px_24px]   text-gray-800 dark:text-gray-200 ">
            {<Navbar />}

            <QueryProvider>{children}</QueryProvider>

            {<Footer />}
          </div>
          <ToastContainer
            autoClose={1500}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ThemeProvider>
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
        <ScrollToTop />
      </body>
    </html>
  );
}
