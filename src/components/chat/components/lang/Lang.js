import React from "react";
import styles from "./Lang.module.scss";
import {generateKey} from "../../../../scripts/utils";

const Lang = () => {
    return (
        <div className={styles.lang}>
            {['eng', 'ua'].map((item, i) => {
                return (
                    <div className={styles.wrap} key={generateKey(i)}>
                        <input
                            id={item}
                            className={styles.input}
                            name="lang"
                            defaultChecked={i === 0}
                            type="radio"/>
                        <label htmlFor={item} className={styles.label}>{item}</label>
                    </div>
                )})}
        </div>
    )
};

export default Lang;
