import React from 'react'
import styles from './ModalChoice.module.sass'
import SecondaryButton from "../../secondary-button/SecondaryButton";
import PrimaryButton from "../../primary-button/PrimaryButton";
const ModalChoice = ({isVisible, close, message, action, button}) => {
    const onClick = () => {
        action()
        close()
    }

    return (
        isVisible ?
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.title}>Message</div>
                    <div className={styles.text}>{message}</div>
                    <div className={styles.buttons}>
                        <SecondaryButton text={"Отмена"} action={close}/>
                        <div className={styles.betweenButtons}/>
                        <PrimaryButton text={button} action={onClick}/>
                    </div>
                </div>
            </div>
            : null
    )
}


export default ModalChoice