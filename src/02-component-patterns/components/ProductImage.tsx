import { useContext } from 'react'
import styles from "../styles/styles.module.css";
import NoImage from "../assets/no-image.jpg";
import { ProductContext } from './ProductCard';

export const ProductImage = () => {
    const { product } = useContext(ProductContext)

    return (
        <img className={styles.productImg} src={product.image ? product.image : NoImage} alt="Product Image" />
    )
};
