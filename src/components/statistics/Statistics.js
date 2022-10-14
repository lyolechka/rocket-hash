import React from "react";
import styles from "./Statistics.module.scss";
import data from"./data/data";
import { generateKey } from "../../scripts/utils";

const Statistics = () => {
    const isLoader = true;
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Statistics</h2>
            <div className={styles.information}>
                <div className={`${styles.infoBlock} ${isLoader ? styles.loader : null}`}>
                    <p className={styles.criterion}>Some information</p>
                </div>
                <ul className={styles.list}>
                    {data.map((item, i) => {
                        const { criterion, value} = item;
                        return (
                            <li key={generateKey(i)}
                                className={styles.item}>
                                <p className={styles.criterion}>{criterion}</p>
                                <div className={styles.value}>
                                    {value}<span>%</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
};

export default Statistics;

