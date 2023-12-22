import React, {useState} from 'react'
import styles from './ModalAddTest.module.sass'
import PrimaryButton from "../../primary-button/PrimaryButton";
import useFormField from "../../../hooks/useFormField";
import {
    validateRequestBodySize,
    validateRequestDepth,
    validateThreadsCount,
    validateWorkTime
} from "../../../utils/validation";
import SecondaryButton from "../../secondary-button/SecondaryButton";
import RadioButton from "../../radio-button/RadioButton";
import InputField from "../../input-field/InputField";

const ModalContact = ({isVisible, close, action}) => {

    const requestDepth = useFormField('', validateRequestDepth)
    const threadsCount = useFormField('', validateThreadsCount)
    const workTime = useFormField('', validateWorkTime)
    const requestBodySize = useFormField('', validateRequestBodySize)

    const [requestMethod, setRequestMethod] = useState("GET")
    const [flowType, setFlowType] = useState("WATERFALL")

    const closeModal = () => {
        requestDepth.setError('')
        threadsCount.setError('')
        workTime.setError('')
        requestBodySize.setError('')

        requestDepth.setValue('')
        threadsCount.setValue('')
        workTime.setValue('')
        requestBodySize.setValue('')
        setRequestMethod("GET")
        setFlowType("WATERFALL")

        close()
    }

    const checkData = () => {
        requestDepth.setError(validateRequestDepth(requestDepth.value))
        threadsCount.setError(validateThreadsCount(threadsCount.value))
        workTime.setError(validateWorkTime(workTime.value))
        requestBodySize.setError(validateRequestBodySize(requestBodySize.value))

        if (!validateRequestDepth(requestDepth.value) && !validateThreadsCount(threadsCount.value) && !validateWorkTime(workTime.value) && !validateRequestBodySize(requestBodySize.value)) {
            action({
                threadsCount: threadsCount.value.trim().replace(/\s+/g, ' '),
                requestDepth: requestDepth.value.trim().replace(/\s+/g, ' '),
                workTime: workTime.value.trim().replace(/\s+/g, ' '),
                requestMethod: requestMethod,
                requestBodySize: requestBodySize.value.trim().replace(/\s+/g, ' '),
                flowType: flowType
            })
            closeModal()
        }
    }

    return (
        isVisible ?
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.title}>Добавление теста</div>
                    <InputField placeholder="Глубина запроса" type="number" {...requestDepth}/>
                    <InputField placeholder="Количество потоков" type="number" {...threadsCount}/>
                    <RadioButton label="Метод запроса" name="requestMethod" values={["GET", "POST"]} setResult={setRequestMethod}/>
                    <InputField placeholder="Размер тела запроса" type="number" {...requestBodySize}/>
                    <InputField placeholder="Время работы" type="number" {...workTime}/>
                    <RadioButton label="Тип флоу" name="flowType" values={["WATERFALL", "BATCH"]} setResult={setFlowType}/>
                    <div className={styles.buttons}>
                        <SecondaryButton text={"Отмена"} action={closeModal}/>
                        <div className={styles.betweenButtons}/>
                        <PrimaryButton text="Добавить" action={checkData}/>
                    </div>
                </div>
            </div>
            : null
    )
}

export default ModalContact