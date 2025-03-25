import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { CartProducts } from "./cart-products";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart-products" element={<CartProducts />} />
            </Routes>
        </BrowserRouter>
    );
};