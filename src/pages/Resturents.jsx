import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiIfood } from "react-icons/si";
import { data } from "../assets/Data.js";
import { Link } from "react-router-dom";
import "../Tailwind.css";

function Restaurants() {
  const [input, setInput] = useState("");
  const [ratingInput, setRatingInput] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // First filter according to input and rating
  const filteredData = data.filter((obj) => {
    const nameMatch = obj.name.toLowerCase().includes(input.toLowerCase());
    const ratingMatch = Number(obj.rating) >= ratingInput;
    return nameMatch && ratingMatch;
  });

  // Calculate the data for pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Handling page click
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
    // window.scrollTo(0, 0); // if u want after clicking it show top cards
  }

  return (
    <>
      {/* Search Inputs */}
      <div className="flex justify-between items-center p-4" id="inputs">
        <div>
          <label htmlFor="searchR"> Search a resturent</label>
          <input
            className="border-2 p-2"
            type="text"
            id="searchR"
            placeholder="Search a restaurant..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div>
          <label htmlFor="ratingNum">Minimum Rating:</label>
          <input
            className="border-2 p-2 ml-2"
            type="number"
            max={5}
            min={0}
            id="ratingNum"
            value={ratingInput}
            onChange={(e) => {
              setRatingInput(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-evenly items-center gap-y-10 p-4">
        {currentItems.length === 0 ? (
          <p className="text-3xl grid place-items-center font-bold text-rose-600 h-[400px] ">
            No restaurants found.
          </p>
        ) : (
          currentItems.map((restaurant) => (
            <div
              className="w-2/7 shadow-md rounded-lg overflow-hidden"
              id="CARD"
              key={restaurant._id?.$oid || restaurant.name}
            >
              <div id="upper" className="flex flex-col gap-3 p-4">
                <div className="flex items-center gap-4">
                  <h2 className="font-semibold text-2xl">{restaurant.name}</h2>
                  {/* Rating Stars */}
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`
                          ${
                            i < restaurant.rating
                              ? restaurant.rating >= 4
                                ? "text-rose-600"
                                : restaurant.rating >= 2
                                ? "text-rose-400"
                                : "text-gray-300"
                              : "text-gray-300"
                          }
                          text-2xl
                        `}
                      />
                    ))}
                  </div>
                </div>
                <p className="flex items-center gap-2">
                  <FaLocationDot />
                  {`${restaurant.address}, ${restaurant.city}`}
                </p>
                <p>{`${restaurant.outcode} ${restaurant.postcode}`}</p>
              </div>

              <div id="lower" className="bg-gray-200 flex flex-col gap-4 p-4">
                <p className="flex items-center gap-2">
                  <SiIfood /> {restaurant.type_of_food}
                </p>
                <Link className="text-blue-400" to={restaurant.URL}>
                  Visit Menu
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Page buttons creates autmatically according to number of cards */}
      <div className="flex justify-center items-center my-6 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            id="pageBtns"
            className={`border-2 rounded-md ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Restaurants;
