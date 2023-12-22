import React from 'react'
import TableHeader from "./table-header/TableHeader"
import TableRow from "./table-row/TableRow"
import styles from './Table.module.sass'

const Table = ({data, deleteTest, printTest}) => {
    return (
        <table className={styles.table}>
            <TableHeader/>
            <tbody>
            {
                data.map((object) => <TableRow content={object} key={object.id} deleteTest={deleteTest} printTest={printTest}/>)
            }
            </tbody>
        </table>
    )
}

export default Table