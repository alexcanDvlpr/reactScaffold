import { ProductImage, ProductTitle, ProductButtons } from '../components';
import ProductCard from '../components/index';


const product = {
    id: "id1",
    title: "Producto 1",
    image: "./coffee-mug.png"
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage;