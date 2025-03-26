import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export const CartProductsCounter = () => {
    return (
        <div>
            <Link to="/cart-products">
                <FiShoppingCart size={24} color="black" />
                <span>0</span>
            </Link>
        </div>
    );
};
