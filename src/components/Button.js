import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../utils/cartSlice";

const Button = ({ productDetail }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItem = useSelector((store) => store.cart.cartItems);
  const addTocart =
    cartItem.findIndex((item) => item.id == productDetail.id) > -1;

  return (
    <div>
      {addTocart ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/cart");
          }}
          className="bg-green-500 font-medium px-[8px] py-[4px] rounded-lg"
        >
          Go to cart
        </button>
      ) : (
        <button
          className="bg-yellow font-medium px-[8px] py-[4px] rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            dispatch(addItem({ ...productDetail, qty: 1 }));
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Button;
