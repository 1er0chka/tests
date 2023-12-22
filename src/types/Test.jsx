export class Test {
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

export const testConverter = {
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