import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <img src={logo} alt="Space Tourism." />
        <nav>
          <button className="hamburger-btn">
            <img src={hamburger} alt="" />
          </button>
          <ul className="nav-menu">
            <li><span>00</span>Home</li>
            <li><span>01</span>Destination</li>
            <li><span>02</span>Crew</li>
            <li><span>03</span>Technology</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;