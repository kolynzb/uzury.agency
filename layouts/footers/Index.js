import DefaultFooter from "./DefaultFooter";
import Footer2 from "./Footer2";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 2:
      return <Footer2 />;
    default:
      return <DefaultFooter />;
  }
};
export default Footer;
