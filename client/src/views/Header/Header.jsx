import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../../images/menu.svg";
import style from "./Header.module.css";
import SearchBar from "./SearchBar/SearchBar";

function Header() {
  const [menuHo, setMenuHo] = useState(false);

  function handleClick() {
    setMenuHo(!menuHo);
  }

  return (
    <div className={style.header}>
      <div className={style.header_cont}>
        <div className={style.div_responsive_header}>
          <Link to="/home" className={style.logo}>
            <h1 className={style.logo}>HENRY | FOOD</h1>
          </Link>
          <button className={style.button_header_menu} onClick={handleClick}>
            <img className={style.menu} src={menu} alt="menu" />
          </button>
        </div>

        <div className={menuHo ? style.menu_hiden.active : style.menu_hiden}>
          <a
            href="https://github.com/pablorossetti33"
            target="_balck"
            className={style.about_responsive}
          >
            GitHub
          </a>
        </div>

        <div className={style.nav}>
          <a
            href="https://github.com/pablorossetti33"
            target="_balck"
            className={style.about}
          >
            GitHub
          </a>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Header;
