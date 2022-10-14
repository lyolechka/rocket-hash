import React from "react";
import { ReactComponent as TwitterIcon } from "../../../../images/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../../images/svg/facebook.svg";
import { ReactComponent as YoutubeIcon } from "../../../../images/svg/youtube.svg";
import { ReactComponent as SnapchatIcon } from "../../../../images/svg/snapchat.svg";

import styles from './Socials.module.scss';

const Socials = () => {
    return (
        <ul className={styles.socials}>
            <li className={styles.item}>
                <a className={styles.link} aria-label="twitter" href="#"><TwitterIcon className={styles.svg}/></a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} aria-label="facebook" href="#"><FacebookIcon className={styles.svg}/></a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} aria-label="youtube" href="#"><YoutubeIcon className={styles.svg}/></a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} aria-label="snapchat" href="#"><SnapchatIcon className={styles.svg}/></a>
            </li>
        </ul>
    )
};

export default Socials;
