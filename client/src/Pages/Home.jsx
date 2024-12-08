import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filters";
import StarRating from "../Components/StartRating";
import Drawer from "../Components/Drawer";
import { getWatch } from "../Redux/watchReducer/action";
import Spinner from "../Components/Spinner";
import NoData from "./NoData";

const Home = () => {
  const dispatch = useDispatch();
  const { data, totalFilteredCount, totalLength, isLoading } = useSelector(
    (state) => state.watch
  );
  const { sort, brand, category, gender } = useSelector((state) => state.filters);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalItems = brand || category || gender || sort ? totalFilteredCount : totalLength;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const pages = []

  for(let i=0; i<totalPages; i++){
    pages.push(i+1)
  }

  useEffect(() => {
    dispatch(
    getWatch({
        sort,
        brand,
        category,
        gender,
        skip: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
      })
    );
  }, [sort, brand, category, gender, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex gap-3 mt-[20px] mb-[60px]">
      <div className=" sm:hidden md:block lg:block sm:w-1/2 md:w-1/4 lg:w-1/4">
        <Filter />
      </div>
      
      
   <div className="sm:w-full md:w-3/4 lg:w-3/4">
      <div className="md:hidden lg:hidden">
      <Drawer/>
      </div>
      {isLoading && <Spinner/>}
      {!isLoading && data.length== 0 && <NoData className="m-auto"/>}
      <div className="w-full lg:grid lg:grid-cols-3 gap-y-3 gap-4 sm:m-auto md:m-auto lg:m-auto md:grid md:grid-cols-2 sm:grid-cols-1 items-center">
        {!isLoading && data &&
          data.length > 0 &&
          data.map((item) => (
            <div
              key={item?._id}
              className="lg:w-[300px] md:w-[250px] sm:w-[250px]  border rounded-sm sm:mt-4 lg:p-[12px] m-auto"
            >
              <div>
                <div className="w-full lg:h-[280px] md:h-[260px] sm:h-[250px] m-auto">
                  <img
                    src={item?.image}
                    alt="image"
                    className="w-full h-full object-fill transition-transform duration-500 hover:scale-105 block"
                  />
                </div>
                <div className="w-full h-auto p-2 text-left font-semibold text-sm">
                  <div className="lg:text-base md:text-sm sm:text-xs overflow-hidden whitespace-nowrap text-ellipsis">
                    {item.name}
                  </div>
                  <div className="text-[#969491] lg:text-base md:text-sm sm:text-xs">
                    {item.brand}
                  </div>
                </div>
                <div className="flex items-center p-2 text-left gap-3 mt-1">
                  <p className="font-semibold lg:text-sm md:text-xs sm:text-xs">
                    {item.category}
                  </p>
                  <p className="font-semibold lg:text-sm md:text-xs sm:text-xs">
                    {item.suitable_for}
                  </p>
                </div>
                <div className="flex flex-start items-center justify-around gap-3 mt-2 w-full text-left">
                    <p className="font-semibold text-gray-500 lg:text-sm md:text-xs sm:text-xs text-left">
                         &nbsp; &#8377; {item.price}
                    </p>
                  <div className="m-auto sm:w-1/2 md:w-1/2 lg:w-1/2 sm:gap-1 md:gap-1 lg:gap:1 flex items-center font-semibold lg:text-sm md:text-xs sm:text-xs md:p-1">
                    <p>{item.rating}</p>
                    <StarRating stars={item.rating} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center mt-4 gap-2">
        {pages?.map((item,index) => (
          <button
            key={item}
            onClick={() => handlePageChange(item)}
            className={`px-4 py-2 rounded ${
              currentPage === item
                ? "bg-blue-700 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;
