import React from 'react'
import styles from './InputField.module.sass'

const InputField = ({placeholder, value, onChange, error, type}) => {
    return (
        <div className={error ? styles.error : styles.input}>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
            <div>{error}</div>
        </div>
    )
}

export default InputField
