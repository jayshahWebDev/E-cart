import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../utils/constant";
import { addItem } from "../../utils/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.cartItems);
  const addTocart = cartItem.findIndex((item) => item.id == id) > -1;

  const getProductDetail = async () => {
    try {
      const productdata = await fetch(`${API_URL}/${id}`);
      const productJsonData = await productdata.json();
      setProductDetail(productJsonData);
    } catch (error) {}
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  if (!productDetail) return;
  return (
    <div className="flex flex-col mx-[4%] laptop:flex-row laptop:items-center">
      <div className="flex justify-center laptop:w-[40%]">
        <img
          className="h-[300px] w-[200px] object-cover"
          src={productDetail?.image}
        />
      </div>
      <div className="flex flex-col gap-y-[10px] laptop:w-[60%]">
        <p>{productDetail?.title}</p>
        <div className="flex items-center gap-x-[3px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffd814"
            className="h-[15px]"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
          <p>{productDetail?.rating?.rate}</p>
          <p>{`(${productDetail?.rating?.count})`}</p>
        </div>

        <div className="flex justify-between items-center laptop:flex-col laptop:items-start laptop:gap-y-[10px]">
          <p className="font-medium">₹{productDetail?.price}</p>
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
        <p>{productDetail?.description}</p>
        <p>
          <span className="font-medium">Category:</span>{" "}
          {productDetail?.category}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
