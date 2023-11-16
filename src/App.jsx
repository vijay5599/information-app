// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import PostalCodeForm from "./PostalCodeForm";
import LocationInfo from "./LocationInfo";

const App = () => {
  return (
    <Provider store={store}>
      <div className="justify-center flex-none ">
        <PostalCodeForm />
        <LocationInfo />
      </div>
    </Provider>
  );
};

export default App;
