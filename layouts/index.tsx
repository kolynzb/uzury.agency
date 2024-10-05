"use client";
import React, { useEffect } from "react";
import { accordion, milButtonClick, milButtonClick2 } from "@/common/utilits";
import Footer from "./footers";
import Header from './headers';

interface LayoutProps {
  children:React.ReactNode;
  header?:number,
  footer?:number,
  noHeader?:boolean;
  noFooter?:boolean;
  transparent?:boolean;
  headerTop?:boolean;
  extraClass?:React.HTMLAttributes<HTMLDivElement>["className"];
}
const Layout = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  transparent,
  headerTop,
  extraClass,
}:LayoutProps) => {
  useEffect(() => {
    milButtonClick();
    milButtonClick2();
    accordion();
  }, []);

  return (
    <div className="mil-wrapper">
      {!noHeader && (
        <Header
          header={header}
          transparent={transparent!}
          headerTop={headerTop}
          extraClass={extraClass}
        />
      )}
      {children}
      {!noFooter && <Footer footer={footer} />}
    </div>
  );
};
export default Layout;

Layout.defaultProps = {
  transparent:false
}