import './Navbar.css';
import logo from '../../assets/logoclassic.jpg';
import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import menu from '../../assets/menu.png';

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
                        to='hero' 
                        smooth={true} 
                        offset={0} 
                        duration={500} 
                        activeClass="active"
                        spy={true}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to='features' 
                        smooth={true} 
                        offset={-70} 
                        duration={500} 
                        activeClass="active"
                        spy={true}
                    >
                        Features
                    </Link>
                </li>
                <li>
                    <Link 
                        to='portfolio' 
                        smooth={true} 
                        offset={-80} 
                        duration={500} 
                        activeClass="active"
                        spy={true}
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link 
                        to='faq' 
                        smooth={true} 
                        offset={0} 
                        duration={500} 
                        activeClass="active"
                        spy={true}
                    >
                        FAQ
                    </Link>
                </li>
                <li>
                    <Link 
                        to='about' 
                        smooth={true} 
                        offset={0} 
                        duration={500} 
                        activeClass="active"
                        spy={true}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to='contact' 
                        smooth={true} 
                        offset={-250} 
                        duration={500} 
                        activeClass="active"
                        spy={true}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <button className='btn'>Signup</button>
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
