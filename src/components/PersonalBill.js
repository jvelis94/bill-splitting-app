import IndividualItem from "./IndividualItem"
import ItemForm from './ItemForm'
import Totals from "./Totals"
import styles from './IndividualItem.module.css'

const PersonalBill = (props) => {
    const person = props.person


    return (
        <div>
            <div className={styles.personalBillContainer}>
                <h1>{person.name}</h1>
                <ItemForm addItemToPerson={props.addItemToPerson} personId={person.id} />
            </div>
            <div className={styles.billDetailsContainer}>
                <div className={styles.itemsHeaders}>
                    <h4 style={{textIndent: "12px"}}>Item</h4>
                    <h4 className={styles.centerMoneyQuantity}>Qty</h4>
                    <h4 className={styles.centerMoneyQuantity}>Price</h4>
                </div>
                {person.items.map(item => (
                    <IndividualItem
                        key={`${person.id}${item.name}`}
                        item={item} 
                        incrementItemQuantity={props.incrementItemQuantity}
                        decrementItemQuantity={props.decrementItemQuantity}
                        personId={person.id}
                    />
                ))}
            </div>
            <Totals person={person} />
        </div>
    )

}


export default PersonalBill