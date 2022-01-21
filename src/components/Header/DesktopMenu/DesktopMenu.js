const DesktopMenu = () => {
  return (
      <nav className="desktop-menu">
        <ul className="desktop-menu__list">
          <li className="desktop-menu__list-item">Features</li>
          <li className="desktop-menu__list-item">Pricing</li>
          <li className="desktop-menu__list-item">Resources</li>
        </ul>
        <button className="btn btn-login">Login</button>
        <button className="btn btn-cta">Sign Up</button>
      </nav>
  );
};

export default DesktopMenu;
