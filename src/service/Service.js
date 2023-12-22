const Service = {
    async getAllTests() {
        try {
            return [{
                "id": "1f2e74c7-0344-4b76-b68a-046d45aced45",
                "threadsCount": 0,
                "requestDepth": 0,
                "workTime": 0,
                "requestMethod": null,
                "flowType": null,
                "requestBodySize": 0,
                "state": "FINISHED"
            }, {
                "id": "2f2e74c7-0344-4b76-b68a-046d45aced45",
                "threadsCount": 0,
                "requestDepth": 0,
                "workTime": 0,
                "requestMethod": null,
                "flowType": null,
                "requestBodySize": 0,
                "state": "ABORTED"
            }, {
                "id": "3f2e74c7-0344-4b76-b68a-046d45aced45",
                "threadsCount": 0,
                "requestDepth": 0,
                "workTime": 0,
                "requestMethod": null,
                "flowType": null,
                "requestBodySize": 0,
                "state": "FINISHED"
            }]

            // TODO - то что сверху - удалить
            // TODO надо проверить или json корректный
            const response = await fetch("http://localhost:9999/grpc-speedometer/tests")
            return await response.json()
        } catch (e) {
            console.error('Failed To Load Data From The Server.')
            return []
        }
    },

    async createTest(test) {
        try {
            const response = await fetch("http://localhost:9999/grpc-speedometer/start", {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(test)
            })
            // TODO надо получать данные о том добавился или нет (это можно просто статусами указать)
        } catch (e) {
            console.error('Failed To Create Test.')
            return false
        }
        return true
    },

    async stopTest(test) {
        try {
            const response = await fetch(`http://localhost:9999/grpc-speedometer/tests/${test.id}/stop`, {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // TODO надо получать данные о том остановился или нет (это можно просто статусами указать)
        } catch (e) {
            console.error('Failed To Stop Test.')
            return false
        }
        return true
    },

    async printTest(test) {
        try {
            const response = await fetch(`http://localhost:9999/grpc-speedometer/tests/${test.id}/excel`)
            // TODO надо получать данные о том пошло в печать или нет (это можно просто статусами указать)
        } catch (e) {
            console.error('Failed To Print Test Result.')
            return false
        }
        return true
    },
}

export default Service