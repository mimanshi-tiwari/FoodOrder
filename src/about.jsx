import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    console.log("Constructor called");
  }
  async componentDidMount() {
    console.log("Component mounted");
    const data = await fetch("https://api.github.com/users/mimanshi-tiwari");
    const json = await data.json();
    this.setState({
        userInfo: json,
    });
    console.log("Data fetched", json);
  }
  render() {
    //* We can rename variables in destructuring
    const { avatar_url: avatarUrl , login } = this.state.userInfo;
    console.log("Render called");
    return (
      <div>
        <img
          src={avatarUrl}
          alt="Avatar"
          style={{ width: "200px", height: "200px" }}
        />
        <h2>{login}</h2>
      </div>
    );
  }
}

export default About;
