import { ProductImage, ProductTitle, ProductButtons } from '../components';
import ProductCard from '../components/index';
import "../styles/custom-styles.css"


const product = {
    id: "id1",
    title: "Producto 1",
    image: "./coffee-mug.png"
}

const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <ProductCard className='bg-dark' product={product}>
                    <ProductImage className='custom-image' />
                    <ProductTitle className="text-white title-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} className='bg-dark'>
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title className="text-white title-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>


                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage;