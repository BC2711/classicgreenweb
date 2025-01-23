import Signup from '../Signup/Signup';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <p>©{new Date().getFullYear()} Copyright ClassicGreen. All Rights Reserved
        Designed by SPEEDPAY ZAMBIA</p>
      <ul>
        <li>
          <Link to="/signup" element={<Signup />}>Terms & Conditions</Link>
        </li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
