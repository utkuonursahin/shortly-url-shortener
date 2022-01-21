const MobileMenu = () => {
  return (
      <nav className="mobile-menu">
        <ul className="mobile-menu__list">
          <li className="mobile-menu__list-item">Features</li>
          <li className="mobile-menu__list-item">Pricing</li>
          <li className="mobile-menu__list-item">Resources</li>
        </ul>
        <span className="mobile-menu__brace"/>
        <ul className="mobile-menu__actions">
          <li className="mobile-menu__actions-item">
            <button className="btn btn-login">Login</button>
          </li>
          <li className="mobile-menu__actions-item">
            <button className="btn btn-cta">Sign Up</button>
          </li>
        </ul>
      </nav>
  );
};

export default MobileMenu;
