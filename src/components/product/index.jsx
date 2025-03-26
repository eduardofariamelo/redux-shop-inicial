import { ListItem } from "./style";

export const Product = ({ name, price }) => {
    return (
        <ListItem>
            <div>
                <h3>{name}</h3>
                <p>
                    {price.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>
            </div>
            <button>
                Adicionar ao carrinho
            </button>
        </ListItem>
    );
};