import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/surflogo1.png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Scroll to section by ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  // Handle dropdown toggle for mobile
  const toggleDropdown = (id) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === id ? null : id);
    }
  };

  // Dropdown menu component
  const DropdownMenu = ({ title, id, items }) => (
    <li
      className={`nav-item dropdown ${activeDropdown === id ? "show" : ""}`}
      onMouseEnter={() => !isMobile && setActiveDropdown(id)}
      onMouseLeave={() => !isMobile && setActiveDropdown(null)}
    >
      <button
        type="button"
        className="nav-link dropdown-toggle btn btn-link w-100 text-start"
        id={id}
        aria-expanded={activeDropdown === id ? "true" : "false"}
        onClick={() => toggleDropdown(id)}
        style={{ textDecoration: "none" }}
      >
        {title}
      </button>
      <ul
        className={`dropdown-menu ${activeDropdown === id ? "show" : ""}`}
        aria-labelledby={id}
        style={{
          display: activeDropdown === id ? "block" : "none",
        }}
      >
        {items.map((item, index) => (
          <li key={index}>
            <a
              className="dropdown-item"
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                if (item.link.startsWith("#")) {
                  scrollToSection(item.link.substring(1));
                } else {
                  closeMenu();
                  window.location.href = item.link;
                }
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 fixed-top">
      {/* Logo */}
      <a className="navbar-brand" href="/">
        <img
          src={logo}
          alt="Logo"
          height="60"
          className="d-inline-block align-text-top"
          style={{ marginRight: "10px" }}
        />
      </a>

      {/* Mobile toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        aria-controls="navbarNav"
        aria-expanded={isOpen ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <span style={{ fontSize: "1.5rem", color: "white" }}>✖</span>
        ) : (
          <span className="navbar-toggler-icon"></span>
        )}
      </button>

      {/* Navigation Links */}
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ms-auto">
          {/* Home */}
          <li className="nav-item">
            <a
              className="nav-link px-3"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>

          {/* Dropdown Menus */}
          <DropdownMenu
            title="About"
            id="aboutDropdown"
            items={[
              { label: "Our Story", link: "#our-story" }
,
              { label: "Meet the Team", link: "/about/team" },
              { label: "Mission & Vision", link: "/about/mission" },
            ]}
          />
          <DropdownMenu
            title="Surf School"
            id="surfSchoolDropdown"
            items={[
              { label: "Beginner Lessons", link: "/surf-school/beginner" },
              { label: "Intermediate Lessons", link: "/surf-school/intermediate" },
              { label: "Advanced Coaching", link: "/surf-school/advanced" },
            ]}
          />
          <DropdownMenu
            title="Surf Packages"
            id="surfPackagesDropdown"
            items={[
              { label: "Weekend Package", link: "/surf-packages/weekend" },
              { label: "Weekly Package", link: "/surf-packages/weekly" },
              { label: "Custom Package", link: "/surf-packages/custom" },
            ]}
          />

          {/* Other menu items */}
          {[
            { name: "Surf Spots", link: "/surf-spots" },
            { name: "Rentals", link: "/rentals" },
            
            { name: "Yoga", link: "#yoga" },

            { name: "Contact", link: "#contact" }, // Changed to #contact
          ].map((item, index) => (
            <li className="nav-item" key={index}>
              <a
                className="nav-link px-3"
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.link.startsWith("#")) {
                    scrollToSection(item.link.substring(1));
                  } else {
                    closeMenu();
                    window.location.href = item.link;
                  }
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
