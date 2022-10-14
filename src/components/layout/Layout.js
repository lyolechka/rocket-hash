import React from "react";
import Chat from "../chat/Chat";
import FeedCards from "../feed-cards/FeedCards";
import Statistics from "../statistics/Statistics";
import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <main className={styles.layout}>
            <FeedCards/>
            <Statistics />
            <Chat />
        </main>
    )
};

export default Layout;
