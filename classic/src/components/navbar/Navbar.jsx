import './Navbar.css'
import logo from '../../assets/logoclassic.jpg'
const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="classicgreen" className='logo' />
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Portfolio</li>
                <li>FAQ</li>
                <li>About</li>
                <li>Contact</li>
                <li><button className='btn'>Signup</button></li>
            </ul>
        </nav>
    )
}

export default Navbar