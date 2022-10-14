import React from "react";
import styles from "./Links.module.scss";

const data = ['Item', 'Item'];

const Links = () => {
    return (
        <ul className={styles.links}>
            {data.map((item, index) => {
                return (
                    <li key={index} className={styles.item}>
                        <a className={styles.link} href="#">{item}</a>
                    </li>
                )
            })}
        </ul>
    )
};

export default Links;

