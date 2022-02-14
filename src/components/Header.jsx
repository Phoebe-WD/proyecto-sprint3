import React, { useContext } from "react";
import logo from "../assets/logo-desktop.svg";
import logoDark from "../assets/logo-mobile-modo-noct.svg";
import "../styles/styles.css";
import GlobalContext from "../utils/globalContext";

const Header = () => {
  const { isLight, setIsLight } = useContext(GlobalContext);
  const logoLigth = logo;
  const logoNoct = logoDark;

  return (
    <div className="Header">
      <img src={isLight ? logoLigth : logoNoct} alt="logo" />
      <button
        onClick={() => setIsLight(!isLight)}
        className={isLight ? "Light" : "Dark"}
      >
        {isLight ? "LIGHT MODE" : "DARK MODE"}
      </button>
    </div>
  );
};

export default Header;
