import { Link } from "react-router-dom";
import { CartProductsCounter } from "../cart-products-counter";
import { Container } from "../cart-products-counter/style";

export const Header = () => {
    return (
        <Container>
            <Link to="/">
                <h1>Redux Shop</h1>
            </Link>
            <CartProductsCounter />
        </Container>
    );
};