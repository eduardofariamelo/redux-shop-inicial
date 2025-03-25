import { FiShoppingCart } from "react-icons/fi";
import { Container } from "./style";
import { Link } from "react-router-dom";

export const CartProductsCounter = () => {
    return (
        <Container>
            <Link to="/cart-products">
                <FiShoppingCart />
                <span>0</span>
            </Link>
        </Container>
    );
};