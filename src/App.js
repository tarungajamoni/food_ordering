import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Body />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
