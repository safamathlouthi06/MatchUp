import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import "./Header.css"; // Assure-toi d'ajouter les styles correspondants

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deepDropdownOpen, setDeepDropdownOpen] = useState(false);

  return (
    <header className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-between">
        {/* Logo */}
        <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">MatchUp</h1>
        </a>

        {/* Navigation */}
        <nav className={`navmenu ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>

            {/* Dropdown */}
            <li className="dropdown">
              <a href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <span>Dropdown</span> <BiChevronDown className="toggle-dropdown" />
              </a>
              {dropdownOpen && (
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className="dropdown">
                    <a href="#" onClick={() => setDeepDropdownOpen(!deepDropdownOpen)}>
                      <span>Deep Dropdown</span> <BiChevronDown className="toggle-dropdown" />
                    </a>
                    {deepDropdownOpen && (
                      <ul>
                        <li><a href="#">Deep Dropdown 1</a></li>
                        <li><a href="#">Deep Dropdown 2</a></li>
                        <li><a href="#">Deep Dropdown 3</a></li>
                        <li><a href="#">Deep Dropdown 4</a></li>
                        <li><a href="#">Deep Dropdown 5</a></li>
                      </ul>
                    )}
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              )}
            </li>

            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <BiMenu className="mobile-nav-toggle d-xl-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />

        {/* Get Started Button */}
        <a className="btn-getstarted" href="#about">Get Started</a>
      </div>
    </header>
  );
};

export default Header;
