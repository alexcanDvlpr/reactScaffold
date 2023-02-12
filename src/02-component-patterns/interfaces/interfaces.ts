import { Props as ProductCardProps } from '../components/ProductCard';
import { IProps as ProductTitleProps } from '../components/ProductTitle';
import { IProps as ProductImageProps } from "../components/ProductImage"
import { IProps as ProductButtonProps } from '../components/ProductButtons';

export interface Product {
    id: string;
    title: string;
    image?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void
    decreaseBy: (value: number) => void
    product: Product;
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonProps) => JSX.Element,
}

export interface OnChangeArgs {
    product: Product;
    count: number;
}