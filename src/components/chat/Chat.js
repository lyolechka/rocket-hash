import React from "react";
import Lang from "./components/lang/Lang";
import Comments from "./components/comments/Comments";
import Button from "../button/Button";
import styles from "./Chat.module.scss";
import { ReactComponent as GifIcon } from "../../images/svg/gif.svg";
import { ReactComponent as SmilesIcon } from "../../images/svg/smiles.svg";
import { ReactComponent as SendIcon } from "../../images/svg/send.svg";

const Chat = () => {
    return (
        <section className={styles.chat}>
            <header className={styles.header}>
                <h3 className={styles.title}>Chat</h3>
                <Lang />
            </header>
            <Comments />
            <footer className={styles.footer}>
                <form className={styles.form} action="#">
                    <textarea placeholder="Send Message" className={styles.textarea} name="message"></textarea>
                    <div className={styles.buttons}>
                        <Button children={<GifIcon/>} className={styles.button} aria="gif"/>
                        <Button children={<SmilesIcon/>} className={styles.button} aria="smiles"/>
                        <Button children={<SendIcon/>} aria="send"/>
                    </div>
                </form>
            </footer>
        </section>
    )
};

export default Chat;
