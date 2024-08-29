import { stickyNav } from "@/src/common/utilits";
import { useEffect } from "react";
import DefaultHeader from "./DefaultHeader";
import Header2 from "./Header2";

const Header = ({ header, transparent, headerTop, extarClass }) => {
  useEffect(() => {
    stickyNav(extarClass);
  }, []);

  switch (header) {
    case 1:
      return (
        <DefaultHeader
          transparent={transparent}
          headerTop={headerTop}
          extarClass={extarClass}
        />
      );

    case 2:
      return <Header2 transparent={transparent} />;

    default:
      return (
        <DefaultHeader
          transparent={transparent}
          headerTop={headerTop}
          extarClass={extarClass}
        />
      );
  }
};
export default Header;
