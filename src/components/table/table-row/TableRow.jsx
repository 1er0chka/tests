import React from 'react'

import styles from './TableRow.module.sass'
import {useNavigate} from "react-router-dom";

const TableRow = ({content, deleteTest, printTest}) => {
    const navigate = useNavigate()

    const openTest = () => {
        navigate(`/${content.id}`)
    }

    return (
        <tr className={styles.tableRow} onClick={openTest}>
            <td>{content.id}</td>
            <td>{content.state}</td>
            {
                "CREATED WAITING PENDING PREPARING RUNNING".includes(content.state) ?
                    <td>
                        <div onClick={() => deleteTest(content)}>
                            <img src={'/resources/images/cancel.png'} alt="Отмена"/>
                        </div>
                    </td>
                    :
                    null
            }
            {
                "FINISHED".includes(content.state) ?
                    <td>
                        <div onClick={() => printTest(content)}>
                            <img src={'/resources/images/print.png'} alt="Печать"/>
                        </div>
                    </td>
                    :
                    null
            }
            {
                "ABORTED".includes(content.state) ?
                    <td></td>
                    :
                    null
            }
        </tr>
    )
}

export default TableRow