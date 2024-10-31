import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { toast } from "react-toastify";
import { RiDeleteBack2Line } from "react-icons/ri";

const ButtonItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const handleDeleteCartItem = () => {
    dispatch(deleteItem(pizzaId));
    toast.error("Item removed from cart");
  };
  return (
    <Button onClick={handleDeleteCartItem} type={"round"}>
      <RiDeleteBack2Line />
    </Button>
  );
};

export default ButtonItem;
