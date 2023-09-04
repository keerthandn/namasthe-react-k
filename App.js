const heading = React.createElement(
  "h1",
  { id: "heading" }, // adding attributes to tag (3 & 4 props)
  "Hello from react" // children
);
console.log(heading); //object not a tag

{
  /* <div id="parent">
  <div id="child">
    <h1>I am h1</h1>
    <h2>I am h2</h2>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // converts object into browser understandable code
