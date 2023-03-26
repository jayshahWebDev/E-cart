import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.cartItems);

  const calculateTotal = () => {
    let price = 0;
    cartItem?.map((value) => {
      price += value?.price * value?.qty;
    });
    return price;
  };
  let totalPrice = calculateTotal();

  return cartItem.length < 1 ? (
    <div className="flex justify-center items-center mt-[100px]">
      <h1>Please add item to cart</h1>
    </div>
  ) : (
    <div className="mt-[2%] mx-[4%]">
      <div className="h-[550px] flex flex-col gap-y-[30px] overflow-auto py-[20px]">
        {cartItem.map((itemDetail) => (
          <CartItemCard key={itemDetail?.id} item={itemDetail} />
        ))}
      </div>
      <div className="mt-[15px]">
        <div className="flex justify-between items-center">
          <p>Total</p>
          <p className="font-medium">₹{totalPrice.toFixed(2)}</p>
        </div>
        <div className="bg-green-400 text-center py-[8px] rounded-md mt-[10px] cursor-pointer">
          Confirm Order
        </div>
      </div>
    </div>
  );
};

export default Cart;
