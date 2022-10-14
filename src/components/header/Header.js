import React from "react";
import Logo from "./components/logo/Logo";
import Links from "./components/links/Links";
import Search from "./components/search/Search";
import Menu from "./components/menu/Menu";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Logo/>
                <Links/>
                <Search/>
                <Menu/>
            </nav>
        </header>
    )
};

export default Header;
