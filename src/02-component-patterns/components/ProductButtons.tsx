import styles from "../styles/styles.module.css";
import { useContext } from 'react';
import { ProductContext } from './ProductCard';

export interface IProps {
    className?: string;
}

export const ProductButtons = ({ className }: IProps) => {

    const { increaseBy, counter, decreaseBy } = useContext(ProductContext);

    return (
        <div className={`${styles.buttonsContainer} ${className ?? ''}`}>
            <button className={styles.buttonMinus} onClick={() => decreaseBy(1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>+</button>
        </div>
    )
}