import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <img src={logo} alt="Space Tourism." className="logo" />
        <nav>
          <button className="hamburger-btn">
            <img src={hamburger} alt="" />
          </button>
          <ul className="nav-menu">
            <li className="menu-item"><span className="menu-item-number">00</span>Home</li>
            <li className="menu-item"><span className="menu-item-number">01</span>Destination</li>
            <li className="menu-item"><span className="menu-item-number">02</span>Crew</li>
            <li className="menu-item"><span className="menu-item-number">03</span>Technology</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;