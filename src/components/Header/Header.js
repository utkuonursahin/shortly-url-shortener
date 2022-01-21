import {isDesktop} from "react-device-detect";
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import {useState} from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  return (
      <header className="header">
        <svg className="header__logo">
          <use href="./images/sprite.svg#icon-logo"/>
        </svg>
        <svg className="header__hamburger" onClick={() => setIsActive(!isActive)}>
          <use href={`./images/sprite.svg#icon-${isActive ? "close" : "menu"}`}/>
        </svg>
        {isDesktop && <DesktopMenu/>}
        {isActive && <MobileMenu/>}
      </header>
  );
};

export default Header;
