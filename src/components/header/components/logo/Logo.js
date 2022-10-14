import React from "react";
import LogoIconD from "../../../../images/svg/logo-d.svg";
import LogoIconM from "../../../../images/svg/logo-m.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <a href="/" className={styles.logo}>
            <picture>
                <source srcSet={LogoIconD} media="(min-width: 768px)" />
                <img src={LogoIconM} alt="logo"/>
            </picture>
        </a>
    )
};

export default Logo;
