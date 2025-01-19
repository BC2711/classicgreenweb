import './Navbar.css'
import logo from '../../assets/logoclassic.jpg'
import { useEffect, useState } from 'react'
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import menu from '../../assets/menu.png';
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, [])

    const [mobile, setMobile] = useState(false);
    const hideMenu = () => {
        mobile ? setMobile(false) : setMobile(true);
    }
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="classicgreen" className='logo' />
            <ul className={`${mobile ? '' : 'hide-menu'}`}>
                <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
                <li><Link to='features' smooth={true} offset={-70} duration={500}>Features</Link></li>
                <li><Link to='portfolio' smooth={true} offset={-80} duration={500}>Portfolio</Link></li>
                <li><Link to='faq' smooth={true} offset={0} duration={500}>FAQ</Link></li>
                <li><Link to='about' smooth={true} offset={0} duration={500}>About</Link></li>
                <li><Link to='contact' smooth={true} offset={-250} duration={500}>Contact</Link></li>
                <li><button className='btn'>Signup</button></li>
            </ul>
            <img src={menu} alt="menu" className='menu' onClick={hideMenu} />
        </nav>
    )
}

export default Navbar