import React from 'react'
import styles from './SecondaryButton.module.sass'

const SecondaryButton = ({text, action}) => {
    return (
        <div className={styles.button} onClick={action}>
            {text}
        </div>
    )
}

export default SecondaryButton