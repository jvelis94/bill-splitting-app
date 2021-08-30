import styles from './Totals.module.css'

const Totals = (props) => {
    const person = props.person


    return (
        <ul>
            <li className={styles.totals}>
                <span>Subtotal</span>
                <span className={styles.spanCenter}>{person.subtotal}</span>
            </li>
            <li className={styles.totals}>
                <span>Tax (8.875%)</span>
                <span className={styles.spanCenter}>{person.tax}</span>
            </li>
            <li className={styles.totals}>
                <span>Tip</span>
                <span className={styles.spanCenter}>{person.tip}</span>
            </li>
            <li className={`${styles.totals} ${styles.ultimateTotal}`}>
                <span>Total</span>
                <span className={styles.spanCenter}>{person.total}</span>
            </li>
        </ul>
    )

}


export default Totals