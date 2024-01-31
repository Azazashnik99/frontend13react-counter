import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import CopyRight from "./CopyRight";


function Footer() {
    return (
        <div className="footer">
          <FooterLogo/>
          <FooterMenu/>
          <CopyRight/>
        </div>
      )
  }
  
export default Footer;