import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="text-center flex flex-col items-center justify-center mt-5 h-screen">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p
        className="
        mt-7
        text-3xl
        text-red-500
        font-semibold
        text-center
      "
      >
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
