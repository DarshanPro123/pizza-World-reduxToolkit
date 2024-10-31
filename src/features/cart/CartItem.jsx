import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import ButtonItem from "./ButtonItem";
import UpdateQuantityButton from "./UpdateQuantityButton";
import { getCurrentItemQuantity } from "./cartSlice.js";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentCartQuantity = useSelector(getCurrentItemQuantity(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantityButton
          pizzaId={pizzaId}
          currentCartQuantity={currentCartQuantity}
        />
        <ButtonItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
