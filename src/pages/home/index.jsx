import { useState } from "react";
import { Products } from "../../components/products";
import productsJson from "../../json/products.json";

export const Home = () => {
    const [products] = useState(productsJson.data);

    return (
        <main>
            <h1> Home </h1>
            <section>
                <Products products={products} />
            </section>
        </main>
    );
};