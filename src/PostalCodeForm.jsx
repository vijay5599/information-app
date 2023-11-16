// PostalCodeForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  fetchLocationRequest,
  fetchLocationSuccess,
  fetchLocationFailure,
} from "./Redux/store";

const PostalCodeForm = () => {
  const [postalCode, setPostalCode] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const handleSubmit = async (e, postalCode) => {
    e.preventDefault();
    dispatch(fetchLocationRequest());

    try {
      const response = await axios.get(
        `https://api.zippopotam.us/in/${postalCode}`
      );
      dispatch(fetchLocationSuccess(response.data));
    } catch (error) {
      dispatch(fetchLocationFailure());
    }
  };

  return (
    <div className="block justify-center">
      <form onSubmit={(e) => handleSubmit(e, postalCode)}>
        <label className="text-lg font-semibold text-gray-950">
          Enter Postal Code:
          <input
            className="text-black ml-4 p-2 rounded-2xl"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </label>
        <button
          className="ml-4 rounded-md border border-transparent px-4 py-2 text-white font-semibold bg-gray-900 cursor-pointer transition duration-250 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          type="submit"
          disabled={loading}
        >
          {loading ? "Fetching..." : "Fetch Location"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PostalCodeForm;
