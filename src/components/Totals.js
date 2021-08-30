import styles from './Totals.module.css'

const Totals = (props) => {
    const person = props.person


    return (
        <ul>
            <li className={styles.totals}>
                <span>Subtotal</span>
                <span>{person.subtotal}</span>
            </li>
            <li className={styles.totals}>
                <span>Tax (8.875%)</span>
                <span>{person.tax}</span>
            </li>
            <li className={styles.totals}>
                <span>Tip</span>
                <span>{person.tip}</span>
            </li>
            <li className={styles.ultimateTotal}>
                <span>Total</span>
                <span>{person.total}</span>
            </li>
        </ul>
    )

}


export default Totals