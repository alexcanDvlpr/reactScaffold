import styles from "../styles/styles.module.css";
import { useProduct } from '../hooks/useProduct';
import { createContext } from "react";
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy, decreaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            decreaseBy,
            product
        }}>
            <div className={styles.productCard} >
                {children}
            </div>
        </Provider>
    )
}
