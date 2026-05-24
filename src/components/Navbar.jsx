import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ];

  // Capitalize first letter for UI display
  const format = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  // Navbar background blur/change on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      links.forEach(({ link }) => {
        const section = document.getElementById(link);
        if (section) {
          const top = section.offsetTop - 150;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            current = link;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run initially to set active state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : 'auto';
  }, [nav]);

  // Resume download handler
  const downloadResume = () => {
    const a = document.createElement('a');
    a.href = '/resume.pdf'; // Must be inside the public folder
    a.download = 'Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* LOGO */}
          <a href="#home" className="logo">
            Dev<span>Sourabh</span>
            <ArrowUpRight size={16} className="logo-icon" />
          </a>

          {/* RIGHT SIDE (DESKTOP) */}
          <div className="right-side">
            <ul className="nav-links">
              {links.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.link}`}
                    className={activeSection === item.link ? 'active' : ''}
                  >
                    {format(item.link)}
                  </a>
                </li>
              ))}
            </ul>

            <button className="resume-btn" onClick={downloadResume}>
              Resume
            </button>

            {/* HAMBURGER TRIGGER */}
            <button className="hamburger" onClick={() => setNav(!nav)}>
              {nav ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${nav ? 'open' : ''}`}>
        {links.map((item) => (
          <a
            key={item.id}
            href={`#${item.link}`}
            className={activeSection === item.link ? 'active-mobile' : ''}
            onClick={() => setNav(false)}
          >
            {format(item.link)}
          </a>
        ))}
        <button className="mobile-resume" onClick={downloadResume}>
          Resume
        </button>
      </div>
    </>
  );
};

export default Navbar;