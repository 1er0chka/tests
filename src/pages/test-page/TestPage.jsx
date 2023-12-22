import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {database} from "../../service/Firebase";
import {getDocs, where, collection, query} from "firebase/firestore";
import {testConverter} from "../../types/Test";
import Loading from "../../components/loading/Loading";
import PrimaryButton from "../../components/primary-button/PrimaryButton";
import InlineData from "../../components/inline-data/InlineData";
import styles from './TestPage.module.sass'
import Service from "../../service/Service";
import ModalMessage from "../../components/modal/modal-message/ModalMessage";

const TestPage = () => {
    const {testId} = useParams();
    const [isLoaded, setLoaded] = useState(false)
    const [isWaiting, setWaiting] = useState(false)
    const [test, setTest] = useState({})
    const [isMessageModalVisible, setMessageModalVisible] = useState(false)
    const [modalMessageText, setModalMessageText] = useState('')

    const navigate = useNavigate()

    const fun = async () => {
        const q = query(collection(database, "test-case-stats"), where("testCaseId", "==", testId)).withConverter(testConverter);
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size < 1) {
            navigate(`/page-not-found`)
        }
        querySnapshot.forEach((doc) => {
            setTest(doc.data())
            setLoaded(true)
        });
    }

    useEffect(() => {
        fun()
    }, [testId])

    const printTest = async (test) => {
        setWaiting(true)
        Service.stopTest(test).then((isSuccess) => {
            setWaiting(false)
            if (isSuccess) {
                setModalMessageText('Выполняется экспорт результатов выполнения теста.')
                setMessageModalVisible(true)
            } else {
                setModalMessageText('Не удалось экспортировать результаты выполнения теста.')
                setMessageModalVisible(true)
            }
        })
    }

    return (
        <div>
            {
                isLoaded ?
                    <div className={styles.body}>
                        <div className={styles.title}>Результат выполнения теста</div>
                        <div className={styles.title}>${testId}</div>
                        <div className={styles.data}>
                            <InlineData primaryInfo={'Количество запросов'}
                                        secondaryInfo={test.totalRequestCount}/>
                            <InlineData primaryInfo={'Количество запросов в секунду'}
                                        secondaryInfo={test.requestsPerSecond}/>
                            <InlineData primaryInfo={'Среднее количество запросов в секунду'}
                                        secondaryInfo={test.averageRequestsPerSecond}/>
                            <InlineData primaryInfo={'Время выполнения теста'} secondaryInfo={test.second}/>
                            {
                                test.type ?
                                    <InlineData primaryInfo={'Тип'} secondaryInfo={test.type}/>
                                    :
                                    null
                            }
                        </div>
                        <div className={styles.buttons}>
                            <Link className={styles.link} to={'/'}>← Назад</Link>
                            <PrimaryButton text={'Печать'} action={printTest}/>
                        </div>
                    </div>
                    :
                    <Loading/>
            }
            <ModalMessage isVisible={isMessageModalVisible} message={modalMessageText}
                          close={() => setMessageModalVisible(false)}/>
            {
                isWaiting ?
                    <Loading isFront={true}/>
                    :
                    null
            }
        </div>
    );
};

export default TestPage;