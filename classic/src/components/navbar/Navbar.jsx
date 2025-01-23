import './Navbar.css';
import logo from '../../assets/logo-nbm.png';
import { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll, scrollSpy } from 'react-scroll';
import menu from '../../assets/menu_1.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobile, setMobile] = useState(false);

    // Get the current route
    const location = useLocation();

    // Add event listener for sticky navbar
    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        // Initialize scrollSpy to monitor scrolling
        scrollSpy.update();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMobile(!mobile);

    // Determine if the current page is the signup page
    const isSignupPage = location.pathname === '/signup';

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="classicgreen" className="logo" />
            <ul className={`${mobile ? '' : 'hide-menu'}`}>
                {isSignupPage ? (
                    // Show only Home and Signup when on the signup page
                    <>
                        <li>
                            <Link to="/" className={` location.pathname === '/' ? 'active' : ''`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/signup" className="btn active">Signup</Link>
                        </li>
                    </>
                ) : (
                    // Default menu for all other routes
                    <>
                        <li>
                            <ScrollLink
                                to="hero"
                                smooth={true}
                                // offset={-70}
                                duration={500}
                                activeClass="active"
                                spy={true}
                            >
                                Home
                            </ScrollLink>
                            {/* <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link> */}
                        </li>
                        <li>
                            <ScrollLink
                                to="features"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active"
                                spy={true}
                            >
                                Features
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="portfolio"
                                smooth={true}
                                offset={-55}
                                duration={500}
                                activeClass="active"
                                spy={true}
                            >
                                Portfolio
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="faq"
                                smooth={true}
                                offset={0}
                                duration={500}
                                activeClass="active"
                                spy={true}
                            >
                                FAQ
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="about"
                                smooth={true}
                                offset={-20}
                                duration={500}
                                activeClass="active"
                                spy={true}
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                offset={-20}
                                duration={500}
                                activeClass="active"
                                spy={true}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                        <li>
                            <Link to="/signup" className={`btn location.pathname === '/signup' ? 'active' : ''`}>Signup</Link>
                        </li>
                    </>
                )}
            </ul>
            <img
                src={menu}
                alt="menu"
                className="menu"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            />
        </nav>
    );
};

export default Navbar;
