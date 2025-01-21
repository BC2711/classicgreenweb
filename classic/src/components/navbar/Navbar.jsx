import './Navbar.css';
import logo from '../../assets/logoclassic.jpg';
import { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll, scrollSpy } from 'react-scroll';
import menu from '../../assets/menu.png';
import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';
import Hero from '../Hero/Hero';
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobile, setMobile] = useState(false);

    // Add event listener for sticky navbar
    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        // Initialize scrollSpy to monitor scrolling
        scrollSpy.update();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMobile(!mobile);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="classicgreen" className='logo' />
            <ul className={`${mobile ? '' : 'hide-menu'}`}>
                <li>
                    <Link
                        to='/'
                        element={<Hero />}
                    // smooth={true}
                    // offset={0}
                    // duration={500}
                    // activeClass="active"
                    // spy={true}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <ScrollLink
                        to='features'
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
                        to='portfolio'
                        smooth={true}
                        offset={-80}
                        duration={500}
                        activeClass="active"
                        spy={true}
                    >
                        Portfolio
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to='faq'
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
                        to='about'
                        smooth={true}
                        offset={0}
                        duration={500}
                        activeClass="active"
                        spy={true}
                    >
                        About
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to='contact'
                        smooth={true}
                        offset={-250}
                        duration={500}
                        activeClass="active"
                        spy={true}
                    >
                        Contact
                    </ScrollLink>
                </li>
                <li>
                    <Link className='btn' to="/signup" element={<Signup />}>Signup</Link>
                </li>
            </ul>
            <img
                src={menu}
                alt="menu"
                className='menu'
                onClick={toggleMenu}
                aria-label="Toggle menu"
            />
        </nav>
    );
};

export default Navbar;
