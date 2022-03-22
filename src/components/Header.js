import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

  const [activeHeader, setActiveHeader] = useState('');

  const toggleActiveState = (e) => {
    setActiveHeader(e.target.textContent)
  }

  return (
    <header>
      <button className="nav-skip">Skip navigation</button>
      <div className="header-wrapper">
        <Link to="/" className="logo">
          <img src={logo} alt="Space Tourism." />
        </Link>
        <nav>
          <button className="hamburger-btn">
            <img src={hamburger} alt="" />
          </button>
          <ul className="nav-menu">
            <Link to="/" className="menu-item" onClick={toggleActiveState}><span className="menu-item-number">00</span>Home</Link>
            <Link to="/destination" className="menu-item" onClick={toggleActiveState}><span className="menu-item-number">01</span>Destination</Link>
            <Link to="/crew" className="menu-item" onClick={toggleActiveState}><span className="menu-item-number">02</span>Crew</Link>
            <Link to="/technology" className="menu-item" onClick={toggleActiveState}><span className="menu-item-number">03</span>Technology</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;