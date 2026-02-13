import './Header.css';

export default function Header() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header>
      <nav className="container">
        <div className="logo">Douglas Maupin</div>
        <ul>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
