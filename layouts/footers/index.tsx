import DefaultFooter from "./default-footer";
import Footer2 from "./footer-two";

interface FooterProps {
  footer?:number
}
const Footer = ({ footer }:FooterProps) => {
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
