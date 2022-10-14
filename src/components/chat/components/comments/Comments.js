import React from "react";
import styles from "./Comments.module.scss";
import data from "./data/data";
import {generateKey} from "../../../../scripts/utils";

const Comments = () => {
    const isLoaded = false;

    return (
        <div className={styles.wrap}>
            <ul className={`${styles.comments} ${isLoaded ? styles.load : ''}`}>
                {data.map((item, i) => {
                    const {title, description, img} = item;
                    return (
                        <li key={generateKey(i)} className={styles.item}>
                            <div className={`${styles.avatar} ${!img && styles.placeholder} `}>
                                {img && <img src="#" alt={title}/>}
                            </div>
                            {isLoaded ?
                                <div>
                                    <p className={styles.title}>{title}</p>
                                    <p className={styles.description}>{description}</p>
                                </div> :
                                <div className={styles.unloaded}>
                                    <span className={`${styles.text} ${styles.nickname}`}></span>
                                    <span className={styles.text}></span>
                                    <span className={styles.text}></span>
                                </div>
                            }

                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Comments;
