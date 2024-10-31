import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { toast } from "react-toastify";

const ButtonItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const handleDeleteCartItem = () => {
    dispatch(deleteItem(pizzaId));
    toast.error("Item removed from cart");
  };
  return (
    <Button onClick={handleDeleteCartItem} type={"delete"}>
      Delete Item
    </Button>
  );
};

export default ButtonItem;
