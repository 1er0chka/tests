import React from 'react'
import styles from './PrimaryButton.module.sass'

const PrimaryButton = ({text, action}) => {
    return (
        <div className={styles.button} onClick={action}>
            {text}
        </div>
    )
}

export default PrimaryButton