import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearLocation } from "./Redux/store";

const LocationInfo = () => {
  const location = useSelector((state) => state.location);
  const dispatch = useDispatch();

  const handleClearLocation = () => {
    dispatch(clearLocation());
  };

  return (
    <div className="text-lg font-semibold text-gray-950 mt-5">
      <h1>Location Information</h1>
      {location ? (
        <div className="flex-none justify-center items-center">
          <p>
            <span className="font-bold">Country : </span>
            {location.country}
          </p>
          <p>
            <span className="font-bold">Postal Code : </span>
            {location["post code"]}
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8 m-14">
            {location.places.map((place) => (
              <li
                key={place.longitude}
                className="rounded-2xl border-black bg-white text-slate-900 justify-center items-center list-none p-3 shadow-2xl"
              >
                <p>
                  <span className="font-bold">State: </span>
                  {place.state}
                </p>
                <p>
                  <span className="font-bold">Place: </span>
                  {place["place name"]}
                </p>
              </li>
            ))}
          </div>
        </div>
      ) : (
        <p>No location information available.</p>
      )}
      {location && (
        <button
          className="rounded-md border border-transparent px-4 py-2 text-white font-semibold bg-gray-800 cursor-pointer transition duration-250 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          onClick={handleClearLocation}
        >
          Clear Location
        </button>
      )}
    </div>
  );
};

export default LocationInfo;
