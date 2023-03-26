import { useDispatch } from "react-redux";
import {
  increaseItemQty,
  decreaseItemQty,
  removeItem,
} from "../../utils/cartSlice";

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increaseItemQty(item?.id));
  };

  const handleDecrement = () => {
    if (item?.qty == 1) {
      dispatch(removeItem(item?.id));
    }
    dispatch(decreaseItemQty(item?.id));
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-[10px] laptop:gap-x-[25px]">
        <img
          className="h-[100px] w-[100px] laptop:h-[200px] laptop:w-[200px] object-cover"
          src={item?.image}
        />
        <div className="flex flex-col justify-center tablet:flex-row tablet:items-center tablet:gap-x-[60px]">
          <p className="w-[150px] tablet:w-[300px] text-[15px]">
            {item?.title}
          </p>
          <p className="text-[15px] font-medium">₹{item?.price}</p>
        </div>
      </div>
      <div className="flex gap-x-[10px]">
        <div
          onClick={() => {
            handleDecrement();
          }}
          className="cursor-pointer bg-shimmerColor h-[25px] w-[25px] rounded-full flex justify-center items-center text-[20px] font-medium"
        >
          -
        </div>
        <p>{item?.qty}</p>
        <div
          onClick={() => {
            handleIncrement();
          }}
          className="cursor-pointer bg-shimmerColor h-[25px] w-[25px] rounded-full flex justify-center items-center text-[20px] font-medium"
        >
          +
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
