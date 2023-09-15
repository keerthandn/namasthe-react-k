import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/keerthandn");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <div className="avatar">
          <img src={avatar_url} width={30} height={50} alt="avatar" />
        </div>
        <h2>Name: {name}</h2>
        <h4>Contact: testac8547@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
