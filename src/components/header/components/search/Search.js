import React from "react";
import Button from "../../../button/Button";
import {ReactComponent as SearchIcon} from "../../../../images/svg/search.svg";
import styles from "./Search.module.scss";

const Search = () => {
    return (
        <div className={styles.wrap}>
            <form className={styles.search} action="#">
                <input placeholder="Search" className={styles.input} type="text"/>
                <Button children={<SearchIcon/>} className={styles.button}/>
            </form>
        </div>

    )
};

export default Search;
