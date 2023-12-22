import React, {useEffect, useState} from "react";
import Loading from "../../components/loading/Loading";
import Table from "../../components/table/Table";
import Service from "../../service/Service";
import styles from './TestsPage.module.sass'
import PrimaryButton from "../../components/primary-button/PrimaryButton";
import ModalContact from "../../components/modal/modal-add-test/ModalAddTest";
import ModalMessage from "../../components/modal/modal-message/ModalMessage";
import ModalChoice from "../../components/modal/modal-choice/ModalChoice";

const TestsPage = () => {
    const [isLoaded, setLoaded] = useState(false)
    const [isWaiting, setWaiting] = useState(false)
    const [tests, setTests] = useState([])
    const [isAddTestModalVisible, setAddTestModalVisible] = useState(false)
    const [isMessageModalVisible, setMessageModalVisible] = useState(false)
    const [isChoiceModalVisible, setChoiceModalVisible] = useState(false)
    const [modalMessageText, setModalMessageText] = useState('')
    const [testForDeleting, setTestForDeleting] = useState({})

    const getTests = async () => {
        Service.getAllTests().then((data) => {
            setTests(data)
            setLoaded(true)
        })
    }

    setInterval(() => {
        getTests()
    }, 10000)

    const addTest = async (test) => {
        setWaiting(true)
        Service.createTest(test).then((isSuccess) => {
            setWaiting(false)
            if (isSuccess) {
                setModalMessageText('Тест добавлен успешно.')
                setMessageModalVisible(true)
                getTests()
            } else {
                setModalMessageText('Не удалось добавить тест.')
                setMessageModalVisible(true)
            }
        })
    }

    const deleteAction = (test) => {
        setTestForDeleting(test)
        setChoiceModalVisible(true)
    }

    const deleteTest = async () => {
        setWaiting(true)
        Service.stopTest(testForDeleting).then((isSuccess) => {
            setWaiting(false)
            if (isSuccess) {
                setModalMessageText('Выполнение теста остановлено.')
                setMessageModalVisible(true)
                getTests()
            } else {
                setModalMessageText('Не удалось остановить выполнение теста.')
                setMessageModalVisible(true)
            }
        })
    }

    const printTest = async (test) => {
        setWaiting(true)
        Service.stopTest(test).then((isSuccess) => {
            setWaiting(false)
            if (isSuccess) {
                setModalMessageText('Выполняется экспорт результатов выполнения теста.')
                setMessageModalVisible(true)
                getTests()
            } else {
                setModalMessageText('Не удалось экспортировать результаты выполнения теста.')
                setMessageModalVisible(true)
            }
        })
    }

    useEffect(() => {
        getTests()
    }, [])

    return (
        <div>
            {
                isLoaded ?
                    <div>
                        <div className={styles.button}>
                            <PrimaryButton text={"Добавить тест"} action={() => setAddTestModalVisible(true)}/>
                        </div>
                        <Table data={tests} deleteTest={deleteAction} printTest={printTest}/>
                    </div>
                    :
                    <Loading/>
            }
            <ModalContact isVisible={isAddTestModalVisible} close={() => setAddTestModalVisible(false)}
                          action={addTest}/>
            <ModalMessage isVisible={isMessageModalVisible} message={modalMessageText}
                          close={() => setMessageModalVisible(false)}/>
            <ModalChoice isVisible={isChoiceModalVisible}
                         message={'Вы уверены, что хотите остановить процесс выполнения теста?'}
                         close={() => setChoiceModalVisible(false)} action={deleteTest} button={"Остановить"}/>
            {
                isWaiting ?
                    <Loading isFront={true}/>
                    :
                    null
            }
        </div>
    )
}

export default TestsPage