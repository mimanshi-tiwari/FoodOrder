import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    // console.log("Constructor called");
  }
  async componentDidMount() {
    // console.log("Component mounted");
    const data = await fetch("https://api.github.com/users/mimanshi-tiwari");
    const json = await data.json();
    this.setState({
        userInfo: json,
    });
    // console.log("Data fetched", json);
  }
  render() {
    //* We can rename variables in destructuring
    const { avatar_url: avatarUrl , login } = this.state.userInfo;
    // console.log("Render called");
    return (
      <div className="flex flex-row h-[90vh] p-6 gap-8">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="h-[150px] w-[150px]"
        />
        <div className="flex flex-col gap-2 text-[#463e2d] w-4xl">
        <p>Developer: <span>Mimanshi Tiwari</span></p>
        <h2 className="font-medium">Github: <span>{login}</span></h2>
        <p>APIs: <span>I have used swiggy's APIs to create <b>Home</b> and <b>Menu</b> page. For <b>About</b> github user APIs is being used.</span></p>
        <p>React: <span>18.2.0</span></p>
        <p>Store: <span>RTK (React Toolkit)</span></p>
        <p>Bundler: <span>Parcel</span></p>
        <p>Css: <span>Tailwind</span></p>
        <p>Unit test: <span>100 % coverage</span></p>
        <p>This app is just for self learnig ad documentation purpose.<br/> This app is created from scratch without using CRA.</p>
        </div>
      </div>
    );
  }
}

export default About;
