import { useState, useRef } from 'react'
import styles from './ItemForm.module.css'

const ItemForm = (props) => {
    const nameRef = useRef()
    const priceRef = useRef()

    const handleFormSubmit = (event) => {
        event.preventDefault()
        props.addItemToPerson(nameRef.current.value, priceRef.current.value, props.personId)
        nameRef.current.value = ""
        priceRef.current.value = ""
    }

    return (
        <form className={styles.formContainer} onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="burger" className={styles.formInputs} ref={nameRef} />    
            <input type="text" name="price" placeholder="20" className={styles.formInputs} ref={priceRef} />
            <input type="submit" style={{display: 'none'}}/>
        </form>
    )
}

export default ItemForm