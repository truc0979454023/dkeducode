import React from "react";
import Footer from "./Footer";
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <SubHeader />
      <MainHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
