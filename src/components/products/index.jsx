import { Product } from "../product";

export const Products = ({ products }) => {
    return (
        <>
            <ul>
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <Product key={index} name={product.name} price={product.price} />
                    ))
                ) : (
                    <li>Nenhum produto encontrado</li>
                )}
            </ul>
        </>
    );
};