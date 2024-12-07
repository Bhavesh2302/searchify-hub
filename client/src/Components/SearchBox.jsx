import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getWatch } from "../Redux/watchReducer/action";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const { sort, brand, category, gender } = useSelector((state) => state.filters);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  

  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
       e.preventDefault()
       getSearchData()
    }
 }
 
 const getSearchData = () => {
   dispatch(
     getWatch({
       search: search,
       sort,
       brand,
       category,
       gender,
       skip: 0,
     })
   )
     .then((res) => {
       if (res.type == "GET_WATCH_SUCCESS") {
         navigate("/", { state: { data: res.payload } });
       }
     })
     .catch((err) => {
       console.log(err);
     });
 };
 const handleSearch = () => {
    getSearchData();
  };
  return (
    <div className="w- full flex items-center justify-center h-20 border">
      <div className="sm:w-3/4 md:w-1/2 lg:w-1/2 flex">
        <input
          name="search"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search here ..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-[5px] focus-visible:outline-none block w-full pl-2 h-10 sm:h-8 md:h-8 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        />
        <button 
            className="text-sm font-medium text-white bg-blue-700 rounded-r-[5px] h-10 w-10 sm:h-8 md:h-8 flex items-center justify-center"
            onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
