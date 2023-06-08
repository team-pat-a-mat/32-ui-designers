import "./globals.css";
import "swiper/css";
import "react-datepicker/dist/react-datepicker.css";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Nav from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Nav />
        <div className="px-8">{children}</div>
      </body>
    </html>
  );
}
