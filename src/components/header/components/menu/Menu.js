import React, { useState } from "react";
import Button from "../../../button/Button";
import { ReactComponent as MenuIcon } from "../../../../images/svg/menu.svg";
import data from "./data/data";
import styles from "./Menu.module.scss";
import {generateKey} from "../../../../scripts/utils";

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState(false);

    const handleMenu = () => setActiveMenu(!activeMenu);

    return (
        <div className={styles.wrap}>
            <div className={styles.menu}>
                <Button onClick={handleMenu} className={styles.button} aria="menu" children={<MenuIcon />}/>
                <div className={`${styles.navigation} ${activeMenu ? styles.open : ''}`}>
                    <div className={styles.container}>
                        <ul className={styles.list}>
                            {data.map((obj, i) => {
                                const { item } = obj;
                                return (
                                    <li key={generateKey(i)} className={styles.item}>
                                        <a className={styles.link} href="#">{`${item} ${i + 1}`}</a>
                                    </li>
                                )})}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Menu;
