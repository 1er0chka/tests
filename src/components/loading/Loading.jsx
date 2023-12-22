import React from 'react'
import styles from './Loading.module.sass'

const Loading = ({isFront = false}) => {
    return (
        <div className={isFront ? styles.loadingFront : styles.loading}>
            <div/>
            <div/>
            <div/>
        </div>
    )
}

export default Loading