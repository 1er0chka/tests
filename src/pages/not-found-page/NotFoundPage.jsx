import React from 'react';
import {Link} from "react-router-dom";
import styles from './NotFoundPage.module.sass'

const NotFoundPage = () => {
    return (
        <div>
            <div className={styles.title}>
                404 Страница не найдена :(
            </div>
            <Link className={styles.link} to={'/'}>← Назад</Link>
        </div>
    );
};

export default NotFoundPage;