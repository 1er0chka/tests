import React from 'react'
import styles from './DynamicTableRow.module.sass'

const DynamicTableRow = ({content}) => {
    return (
        <tr className={styles.tableRow}>
            <td>{content.averageRequestsPerSecond}</td>
            <td>{content.requestsPerSecond}</td>
            <td>{content.second}</td>
            <td>{content.totalRequestCount}</td>
        </tr>
    )
}

export default DynamicTableRow