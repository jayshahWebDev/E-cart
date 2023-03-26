import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../utils/constant";
import ProductCard from "./ProductCard";
import ProductListShimmer from "./ProductListShimmer";

const ProductList = () => {
  const [allProductList, setAllProductList] = useState(null);
  const [filterProductList, setFilterProductList] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  const getProductList = async () => {
    try {
      const productdata = await fetch(API_URL);
      const productJsonData = await productdata.json();
      setAllProductList(productJsonData);
      setFilterProductList(productJsonData);
    } catch (error) {}
  };

  useEffect(() => {
    getProductList();
  }, []);

  return !allProductList ? (
    <ProductListShimmer />
  ) : (
    <div>
      <div className="flex justify-center mt-[25px]">
        <input
          className="border rounded-lg py-[5px] px-[5px] outline-none w-[300px]"
          placeholder="Search By Name"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            const filterData = allProductList.filter((product) => {
              return product?.title
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            });
            setFilterProductList(filterData);
          }}
        />
      </div>
      <div className="mt-[20px] flex flex-col gap-y-[20px] tablet:flex-row tablet:flex-wrap tablet:justify-center tablet:gap-y-[30px]">
        {filterProductList?.map((detail) => (
          <ProductCard key={detail?.id} productDetail={detail} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
