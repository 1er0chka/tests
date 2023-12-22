function validateNumber(number, min, max) {
    if (!number || !parseInt(number)) return `Введите целое число (${min} - ${max})`
    if (parseInt(number) > max || parseInt(number) < min) return (`Число должно быть в промежутке от ${min} до ${max}`)
    return ''
}

export function validateRequestDepth(requestDepth) {
    return validateNumber(requestDepth.trim().replace(/\s+/g, ' '), 1, 10)
}

export function validateThreadsCount(threadsCount) {
    return validateNumber(threadsCount.trim().replace(/\s+/g, ' '), 1, 50)
}

export function validateRequestBodySize(requestBodySize) {
    return validateNumber(requestBodySize.trim().replace(/\s+/g, ' '), 1, 1000)
}

export function validateWorkTime(workTime) {
    return validateNumber(workTime.trim().replace(/\s+/g, ' '), 1, 200)
}