import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// Header
//   - Logo
//   - Nav Item
// Body
//   - Search Section
//   - Card container
//     - Resto Cards
// Footer
//   - Copyrigh
//   - Links
//   - Contact

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
