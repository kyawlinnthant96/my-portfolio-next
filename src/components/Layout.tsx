import { Sora } from "next/font/google";
import Nav from "./Nav";
import Header from "./Header";
import { ReactNode } from "react";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${sora.variable} font-sora relative page bg-slate-900 text-white bg-cover bg-no-repeat`}
    >
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
