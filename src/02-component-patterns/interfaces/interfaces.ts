import { ReactElement } from 'react';

export interface Product {
    id: string;
    title: string;
    image?: string;
}

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | Array<ReactElement>
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void
    decreaseBy: (value: number) => void
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element,
}