import styles from "../styles/styles.module.css";
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | Array<ReactElement>;
    className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy, decreaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            decreaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className ?? ''}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}
