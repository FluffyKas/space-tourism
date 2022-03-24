import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {

  // const [activeHeader, setActiveHeader] = useState('');

  // const toggleActiveState = (e) => {
  //   setActiveHeader(e.target.textContent)
  // }

  const [isOpened, setIsOpened] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsOpened(!isOpened)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, []);

  return (
    <header className="ff-barlow-cond white">
      <Link to="#main" className="nav-skip uppercase">Skip navigation</Link>
      <div className="header-wrapper">
        <Link to="/" className="logo">
          <img src={logo} alt="Space Tourism." />
        </Link>

        <nav>

          <button className="hamburger-btn" aria-expanded={isOpened ? "true" : "false"} aria-controls="nav-menu" onClick={toggleMenu}>
            <img src={hamburger} alt="" />
            <span className="sr-only">Menu</span>
          </button>

          {(isOpened || screenWidth > 640) && (
            <ul id="nav-menu" className="nav-menu uppercase">
              <li><Link to="/" className="menu-item"><span className="menu-item-number" aria-hidden="true">00</span>Home</Link></li>
              <li><Link to="/destination" className="menu-item"><span className="menu-item-number" aria-hidden="true">01</span>Destination</Link></li>
              <li><Link to="/crew" className="menu-item"><span className="menu-item-number" aria-hidden="true">02</span>Crew</Link></li>
              <li><Link to="/technology" className="menu-item"><span className="menu-item-number" aria-hidden="true">03</span>Technology</Link></li>
            </ul>
          )}
        </nav>

      </div>
    </header >
  );
}

export default Header;