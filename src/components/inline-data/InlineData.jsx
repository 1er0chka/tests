import React from "react";
import styles from "./InlineData.module.sass";

const InlineData = ({primaryInfo, secondaryInfo,}) => {
    return (
        <div data-testid="coin-data">
            <div className={styles.title}>
                <div className={styles.primaryInfo}>{primaryInfo}</div>
                <div className={styles.secondaryInfo}>{secondaryInfo}</div>
            </div>
        </div>
    );
};
export default InlineData;
