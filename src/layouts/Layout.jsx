import React from "react";
import { Toaster } from "sonner";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Toaster theme="dark" position="top-right" duration={2000} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
