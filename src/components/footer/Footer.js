import React from "react";
import Socials from "./components/socials/Socials";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.copyright}>© 2021. All rights reserved</div>
                <Socials />
            </div>
        </footer>
    )
};

export default Footer;
