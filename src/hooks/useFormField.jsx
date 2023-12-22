import {useState} from 'react'

const useFormField = (initialValue, validateFunction) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
        setError(validateFunction(event.target.value))
    }

    const getError = () => {
        return error
    }

    return {value, onChange, error, setError, getError, isValid: error === '', setValue}
}

export default useFormField
