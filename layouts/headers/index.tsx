"use client";
import { stickyNav } from "@/common/utils";
import React, { useEffect } from "react";
import DefaultHeader from "./default-header";
import Header2 from "./header-two";

interface HeaderProps {
  header?:number
  transparent?:boolean;
  headerTop?:boolean;
  extraClass?:React.HTMLAttributes<HTMLDivElement>["className"];
}

const Header = ({ header, transparent, headerTop, extraClass }:HeaderProps) => {
  useEffect(() => {
    stickyNav(extraClass);
  }, [extraClass]);

  switch (header) {
    case 1:
      return (
        <DefaultHeader
          transparent={transparent}
          headerTop={headerTop}
          extraClass={extraClass}
        />
      );

    case 2:
      return <Header2  />;

    default:
      return (
        <DefaultHeader
          transparent={transparent}
          headerTop={headerTop}
          extraClass={extraClass}
        />
      );
  }
};
export default Header;
