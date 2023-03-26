const ProductListShimmer = () => {
  return (
    <div>
      <div className="border flex justify-center">
        <input className="border rounded-lg py-[5px] px-[5px]" />
      </div>
      <div className="flex flex-col gap-y-[20px] tablet:flex-row tablet:flex-wrap tablet:justify-center tablet:gap-y-[30px]">
        {Array(20)
          .fill("")
          .map((v, i) => (
            <div
              key={i}
              className="mx-[4%] flex gap-x-[10px] tablet:flex-col tablet:w-[250px] tablet:h-fit py-[10px] cursor-pointer"
            >
              <div className="w-[30%] tablet:w-full tablet:flex tablet:justify-center">
                <div className="h-[150px] tablet:h-[200px] tablet:w-[150px] w-full bg-shimmerColor" />
              </div>
              <div className="w-[70%] mt-[20px] gap-y-[10px] tablet:w-full tablet:px-[6px] tablet:flex tablet:flex-col tablet:gap-y-[5px]">
                <div className="bg-shimmerColor h-[10px] w-[90%]" />
                <div className="bg-shimmerColor h-[10px] w-[70%]" />
                <div className="bg-shimmerColor h-[10px] w-[50%]" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductListShimmer;
