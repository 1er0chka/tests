import React from 'react'
import styles from './DynamicTable.module.sass'
import DynamicTableRow from "./dynamic-table-row/DynamicTableRow";
import DynamicTableHeader from "./dynamic-table-header/DynamicTableHeader";

const DynamicTable = ({data}) => {
    return (
        <table className={styles.table}>
            <DynamicTableHeader/>
            <tbody>
            {
                data.map((object) => <DynamicTableRow content={object} key={object.id}/>)
            }
            </tbody>
        </table>
    )
}

export default DynamicTable