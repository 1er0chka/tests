import React from 'react'
import styles from './TableHeader.module.sass'

const TableHeader = () => {
    return (
        <thead className={styles.tableHeader}>
        <tr>
            <th>Тест</th>
            <th>Статус</th>
            <th></th>
        </tr>
        </thead>
    )
}

export default TableHeader