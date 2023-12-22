import React from 'react'
import styles from './DynamicTableHeader.module.sass'

const DynamicTableHeader = () => {
    return (
        <thead className={styles.tableHeader}>
        <tr>
            <th>Время выполнения теста</th>
            <th>Кол-во запросов</th>
            <th>Кол-во запросов в секунду</th>
            <th>Среднее кол-во запросов</th>
        </tr>
        </thead>
    )
}

export default DynamicTableHeader