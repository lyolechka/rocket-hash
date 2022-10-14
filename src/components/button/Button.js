import React from "react";
import styles from "./Button.module.scss";

const Button = ({children, className = '', aria, onClick = null}) => {
    return (
        <button
            aria-label={aria}
            {...(onClick ? {onClick: onClick} : null)}
            className={`${className} ${styles.button}`}
        >
            {children}
        </button>
    )
};

export default Button;
