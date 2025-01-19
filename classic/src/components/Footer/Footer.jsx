import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>©{new Date().getFullYear()} Copyright ClassicGreen. All Rights Reserved
        Designed by SPEEDPAY ZAMBIA</p>
      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
