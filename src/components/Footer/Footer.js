const Footer = () => {
  return (
      <footer className="footer">
        <svg className="footer__logo">
          <use href="./images/sprite.svg#icon-logo"/>
        </svg>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-list--item">
              <h5 className="heading-5">Features</h5>
            </li>
            <li className="footer__nav-list--item">Link Shortening</li>
            <li className="footer__nav-list--item">Branded Links</li>
            <li className="footer__nav-list--item">Analytics</li>
          </ul>
          <ul className="footer__nav-list">
            <li className="footer__nav-list--item">
              <h5 className="heading-5">Resources</h5>
            </li>
            <li className="footer__nav-list--item">Blog</li>
            <li className="footer__nav-list--item">Developers</li>
            <li className="footer__nav-list--item">Support</li>
          </ul>
          <ul className="footer__nav-list">
            <li className="footer__nav-list--item">
              <h5 className="heading-5">Company</h5>
            </li>
            <li className="footer__nav-list--item">About</li>
            <li className="footer__nav-list--item">Our Team</li>
            <li className="footer__nav-list--item">Careers</li>
            <li className="footer__nav-list--item">Contact</li>
          </ul>
        </nav>
        <ul className="footer__social-list">
          <li className="footer__social-list--item">
            <svg className="social-icon">
              <use href="./images/sprite.svg#icon-facebook"/>
            </svg>
          </li>
          <li className="footer__social-list--item">
            <svg className="social-icon">
              <use href="./images/sprite.svg#icon-twitter"/>
            </svg>
          </li>
          <li className="footer__social-list--item">
            <svg className="social-icon">
              <use href="./images/sprite.svg#icon-pinterest"/>
            </svg>
          </li>
          <li className="footer__social-list--item">
            <svg className="social-icon">
              <use href="./images/sprite.svg#icon-instagram"/>
            </svg>
          </li>
        </ul>
      </footer>
  );
};

export default Footer;
