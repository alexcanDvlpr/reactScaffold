import { ProductImage, ProductTitle, ProductButtons } from '../components';
import ProductCard from '../components/index';
import "../styles/custom-styles.css"
import { useState } from 'react';
import { Product } from '../interfaces/interfaces';

const producto1 = {
    id: "id1",
    title: "Producto 1",
    image: "./coffee-mug.png"
};

const producto2 = {
    id: "id2",
    title: "Producto 2",
    image: "./coffee-mug.png"
}

const products = [producto1, producto2];

interface ProductInCart extends Product {
    count: number;
}

const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<Record<string, ProductInCart>>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return { ...rest };
            }
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        });
    }

    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            className='bg-dark'
                            product={product}
                            value={shoppingCart[product.id]?.count || 0}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className="text-white title-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className='shopping-cart'>
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            style={{
                                width: "100px"
                            }}
                            className='bg-dark'
                            product={product}
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}

export default ShoppingPage;