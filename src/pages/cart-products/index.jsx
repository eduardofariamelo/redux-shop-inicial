import { Products } from "../../components/products";

export const CartProducts = () => {
    return (
        <main>
            <h1>Cart Products</h1>
            <section>
                <Products products={[]} />
            </section>
        </main>
    );
};