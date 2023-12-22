import React, {useEffect, useState} from 'react'
import styles from './RadioButton.module.sass'

const RadioButton = ({label, name, values, setResult}) => {
    const [value, setValue] = useState(values[0])

    useEffect(() => {
        setResult(value)
    }, [value])

    return <div className={styles.body}>
        <div className={styles.label}>{label}</div>
        <div className={styles.radioButton}>
            {
                values.map((object) => <div className={styles.element} onClick={() => setValue(object)}>
                    <input className={styles.input} type="radio" name={name} value={object} checked={value === object}/>
                    <div className={styles.text}>{object}</div>
                </div>)
            }
        </div>
    </div>;
}

export default RadioButton
