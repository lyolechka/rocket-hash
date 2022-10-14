import React from "react";
import styles from "./FeedCards.module.scss";

const Card = ({item: {title, category, link, linkText, img}}) => {
    const {mobile, tablet, desktop} = img;

    return (
        <article className={styles.card}>
            <a href={link} className={styles.link}> </a>
            <div className={styles.media}>
                <picture className={styles.picture}>
                    <source srcSet={desktop} media="(min-width: 1280px)"/>
                    <source srcSet={tablet} media="(min-width: 768px)"/>
                    <source srcSet={mobile} media="(min-width: 360px)"/>
                    <img src={mobile} alt={title}/>
                </picture>
            </div>

            <div className={styles.content}>
                <p className={styles.category}>{category}</p>
                <h3 className={styles.title}>{title}</h3>
                <a className={styles.more} href={link}>{linkText}</a>
            </div>
        </article>
    )
};

export default Card;
