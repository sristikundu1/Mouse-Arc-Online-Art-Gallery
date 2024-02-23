import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Container } from "@mui/material";
// import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muse Arc",
  description: "This is a online art and gallery website",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar></Navbar> */}
        {/* <Banner></Banner> */}
      <Container className="min-h-screen min-w-full m-0 p-0">
      {children}
      </Container>
      <Footer></Footer>
      </body>
    </html>
  );
}
