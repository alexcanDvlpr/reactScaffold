import { useContext } from 'react'
import styles from "../styles/styles.module.css";
import NoImage from "../assets/no-image.jpg";
import { ProductContext } from './ProductCard';

export interface IProps {
    img?: string;
    className?: string;
}

export const ProductImage = ({ className }: IProps) => {
    const { product } = useContext(ProductContext)

    return (
        <img className={`${styles.productImg} ${className ?? ''}`} src={product.image ? product.image : NoImage} alt="Product Image" />
    )
};
