import React from "react";
import Card from "./Card";
import styles from "./FeedCards.module.scss";
import { data } from "./data/data";
import { generateKey } from "../../scripts/utils";

const FeedCards = () => {
    return (
        <section className={styles.cards}>
            {data.map((item, i) => {
                return <Card item={item} key={generateKey(i)}/>
            })}
        </section>
    )
};

export default FeedCards;
