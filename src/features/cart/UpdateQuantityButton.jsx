import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateQuantityButton = ({ pizzaId, currentCartQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4">
      <Button
        type={"round"}
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        ➖
      </Button>
      <span>{currentCartQuantity}</span>
      <Button
        type={"round"}
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        ➕
      </Button>
    </div>
  );
};

export default UpdateQuantityButton;
