import React from "react";

const Header = ({ onToggleTheme }) => (
  <header>
    <div className="logotext"><strong><a href="/">KursyOnline</a></strong></div>
    <nav>
      <button><a href="onas.html">O nas</a></button>
      <button><a href="kontakt.html">Kontakt</a></button>
      <button className="theme-toggle" onClick={onToggleTheme}>
        <span>🌙</span> Motyw
      </button>
    </nav>
  </header>
);

export default Header;
