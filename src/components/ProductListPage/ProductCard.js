import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItem } from "../../utils/cartSlice";

const ProductCard = ({ productDetail }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItem = useSelector((store) => store.cart.cartItems);
  const addTocart =
    cartItem.findIndex((item) => item.id == productDetail.id) > -1;

  return (
    <Link
      to={"/product/" + productDetail?.id}
      className="mx-[4%] flex gap-x-[10px] tablet:flex-col tablet:w-[250px] tablet:h-fit hover:shadow-md border-[1px] border-transparent tablet:hover:border-[1px] tablet:hover:border-black/30 py-[10px] cursor-pointer"
    >
      <div className="w-[30%] tablet:w-full tablet:flex tablet:justify-center">
        <img
          className="h-[150px] tablet:h-[200px] tablet:w-[150px] w-full object-cover"
          src={productDetail?.image}
        />
      </div>
      <div className="w-[70%] tablet:w-full tablet:px-[6px] tablet:flex tablet:flex-col tablet:gap-y-[5px]">
        <p className="leading-6 line-clamp-2">{productDetail?.title}</p>
        <div className="tablet:flex tablet:flex-row-reverse tablet:justify-between">
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
          <p className="font-medium">₹{productDetail?.price}</p>
        </div>
        <div className="tablet:flex tablet:justify-between tablet:items-center">
          <p>{productDetail?.category}</p>
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
      </div>
    </Link>
  );
};

export default ProductCard;
