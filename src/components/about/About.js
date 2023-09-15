import React from "react";
import User from "../user/User";
import UserClass from "../user/UserClass";

import "./about.css";

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About</h1>
//       {/* <User name={"Keethan"} /> */}
//       <UserClass name={"Keerthan D N"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {

  // }
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        {/* <User name={"Keethan"} /> */}
        <UserClass name={"Keerthan D N"} />
      </div>
    );
  }
}

export default About;
