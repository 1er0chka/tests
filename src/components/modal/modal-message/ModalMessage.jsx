import React from 'react'
import styles from './ModalMessage.module.sass'
import PrimaryButton from "../../primary-button/PrimaryButton";

const ModalMessage = ({isVisible, close, message}) => {
    return (
        isVisible ?
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.title}>Сообщение</div>
                    <div className={styles.text}>{message}</div>
                    <div className={styles.buttons}>
                        <PrimaryButton text={'Закрыть'} action={close}/>
                    </div>
                </div>
            </div>
            : null
    )
}


export default ModalMessage