import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {get, ref} from 'firebase/database'
import {database} from "../../service/Firebase";
import { getDocs , getDoc , collection, query} from "firebase/firestore";

class Test {
    constructor (averageRequestsPerSecond, requestsPerSecond, second, testCaseId, totalRequestCount,  type ) {
        this.averageRequestsPerSecond = averageRequestsPerSecond
        this.requestsPerSecond = requestsPerSecond
        this.second = second
        this.testCaseId = testCaseId
        this.totalRequestCount = totalRequestCount
        this.type = type
    }
    toString() {
        return this.averageRequestsPerSecond + ", " + this.requestsPerSecond + ', ' + this.second + ', ' + this.testCaseId + ', ' + this.totalRequestCount + ', ' + this.type
    }
}

const testConverter = {
    toFirestore: (test) => {
        return {
            averageRequestsPerSecond: test.averageRequestsPerSecond,
            requestsPerSecond: test.requestsPerSecond,
            second: test.second,
            testCaseId: test.testCaseId,
            totalRequestCount: test.totalRequestCount,
            type: test.type
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Test(data.averageRequestsPerSecond, data.requestsPerSecond, data.second, data.testCaseId, data.totalRequestCount, data.type);
    }
};

const TestPage = () => {
    const {testId} = useParams();

    const [data, setData] = useState([])

    const fun = async () => {
        const docRef = collection(database, "test-case-stats").withConverter(testConverter);
        const q = query(collection(database, "cities"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // Convert to test object
            const test = doc.data();
            // Use a City instance method
            console.log(test.toString());
        });

    }

    useEffect(() => {
        fun()
    }, [])


/*
    useEffect(() => {
        const dataRef = ref(database, 'test-case-stats')
        get(dataRef).then((snapshot) => {
            if (snapshot.exists()) {
                const dataArray = Object.entries(snapshot.val()).map(([id, item]) => ({
                   id,
                    ...item,
                }))
                console.log(dataArray)
                setData(dataArray)
            } else {
                console.log('No data available')
            }
        }).catch((e) => {
            console.error(e)
        })
    }, [])
*/
    return (
        <div>
            Тут будет страничка когда фб подключим
        </div>
    );
};

export default TestPage;