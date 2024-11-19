import React, { FC, ReactNode } from "react";
import Navbar from "./navbar";
import Contact from "../sections/contact";

interface LayoutProps {
  children: ReactNode;
  page?: string;
}

const Layout: FC<LayoutProps> = ({ children, page = "home" }) => {
  return (
    <div>
      <Navbar page={page} />
      {children}
      <Contact />
    </div>
  );
};

export default Layout;
