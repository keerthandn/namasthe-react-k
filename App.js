import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 className="heading" tabIndex="5">
    Namasthe React Element
  </h1>
);

const Title = () => (
  <h1 className="heading" tabIndex="5">
    Namasthe React Element 🚀
  </h1>
);

const title = "React";
// Functional Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {/* using {} you can write any js code */}
    {title}
    <h1 className="heading">Namasthe Functional Component</h1>
  </div>
);

const jsxHeading = <h1>Hello JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
