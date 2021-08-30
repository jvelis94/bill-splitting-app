import { useEffect, useState, useRef } from "react"
import PersonalBill from "./PersonalBill"
import styles from "./GroupBill.module.css"
import SimpleTabs from "./Tabs"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import axios from 'axios';


const initialState = []

const GroupBill = () => {
    const [people, setPeople] = useState(initialState)
    const [taxRate, setTaxRate] = useState(0.08875)
    const [tipRate, setTipRate] = useState(.18)
    const [currentId, setCurrentId] = useState(1)
    const newPersonRef = useRef()
    // const [fileData, setFileData] = useState(null)

    useEffect(() => {
        const updatedPeople = people.map(person => {
            let oldTip = person['tip']
            let newTip = Math.round(100*(person['subtotal']) * tipRate)/100
            person['tip'] = newTip
            person['total'] = Math.round(100*(person['total'] - oldTip + newTip))/100
            return person
        })

        setPeople(updatedPeople)

    }, [tipRate])

    const addItemToPerson = (name, price, personId) => {
        console.log(`adding ${name} to person`)
        let currentPersonIndex = people.findIndex(person => person.id === personId)
        let currentPerson = people.filter(person => person.id === personId)
        currentPerson[0]['items'].push({
            name: name,
            price: parseFloat(parseInt(price)),
            qty: 1
        })
        updateTotals(currentPerson[0], currentPersonIndex, price)
    }

    const incrementItemQuantity = (item, personId) => {
        let currentPersonIndex = people.findIndex(person => person.id === personId)
        let currentPerson = people.filter(person => person.id === personId)
        let updateItem = currentPerson[0]['items'].findIndex(el => el.name === item)
        currentPerson[0]['items'][updateItem]['qty'] += 1
        updateTotals(currentPerson[0], currentPersonIndex, currentPerson[0]['items'][updateItem]['price'])
    }

    const decrementItemQuantity = (item, personId) => {
        let currentPersonIndex = people.findIndex(person => person.id === personId)
        let currentPerson = people.filter(person => person.id === personId)
        let updateItem = currentPerson[0]['items'].findIndex(el => el.name === item)
        currentPerson[0]['items'][updateItem]['qty'] -= 1
        updateTotals(currentPerson[0], currentPersonIndex, currentPerson[0]['items'][updateItem]['price'], "minus")
     }


    const incrementTaxRate = () => {
        setTipRate(prevState => prevState += 0.01)
    }

    const decrementTaxRate = () => {
        setTipRate(prevState => prevState -= 0.01)
    }

    const updateTotals = (person, personIndex, price, type="add") => {
        type ==="add" ? person['subtotal'] += parseFloat(parseInt(price)) : person['subtotal'] -= parseFloat(parseInt(price))
        person['tax'] = Math.round(100*(person['subtotal']) * taxRate)/100
        person['tip'] = Math.round(100*(person['subtotal']) * tipRate)/100
        person['total'] = Math.round(100*(person['subtotal'] + person['tax'] + person['tip']))/100

        setPeople(prevState => {
            let newState = [...prevState]
            newState[personIndex] = person
            return newState
        })
    }

    const handleNewPersonSubmit = (event) => {
        event.preventDefault()
        let newPerson = {
            id: currentId,
            name: newPersonRef.current.value,
            items: [],
            subtotal: 0,
            tax: 0,
            tip: 0,
            total: 0
        }
        setPeople(prevState => [...prevState, newPerson])
        setCurrentId(prevState => prevState +=1)
        newPersonRef.current.value = ""
    }

    let tipUi = (
        <div className={styles.centerActionItems}>
            <h4>Tip:</h4>
            <RemoveIcon onClick={decrementTaxRate} />
                {Math.round(tipRate*100)}%  
            <AddIcon onClick={incrementTaxRate} />
        </div>
    )

    let tabsUi = (
        <SimpleTabs 
            people={people} 
            addItemToPerson={addItemToPerson} 
            incrementItemQuantity={incrementItemQuantity}
            decrementItemQuantity={decrementItemQuantity}
        />
    )

    

    // const handleFileChange = event => {
    //     // setFile(event.target.files[0])
    //     handleFileUpload(event.target.files[0])
    // }

    // const handleFileUpload = (file) => {
    //     const formData = new FormData();
    
    //     formData.append("file", file);

    //     const headers = {
    //         'accept': "application/json",
    //         'Content-Type': 'multipart/form-data',
    //         'apikey': '434c1dd009c211ec99d225a622880b2b'
    //     }
    //     axios.post("https://api.taggun.io/api/receipt/v1/verbose/file", formData, {
    //         headers: headers
    //     })
    //     .then(function (response) {
    //         console.log(response.data)
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })
    // } 

    return (
        <>
            <div style={{textAlign: 'center'}}>
                <img src='./split_logo.png' alt='logo' style={{width: '50%'}}/>
            </div>
            
            <div className={styles.newPersonContainer}>
                {/* <input type="file" onChange={handleFileChange} /><br/><br/> */}
                <form onSubmit={handleNewPersonSubmit} >
                    <input type="text" name="name" placeholder="add new person" className={styles.formInputs} ref={newPersonRef} />
                    <input type="submit" style={{display: 'none'}}/>
                </form>
            </div>
            {/* {fileData} */}


            {people.length > 0 && tabsUi}
            {people.length > 0 && tipUi}

            
        </>
    )
}

export default GroupBill