import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {

      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/tarungajamoni");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { name, contact } = this.props;
    // const { count } = this.state;
    const { name, location, avatar_url,login } = this.state.userInfo;
    return (
      <div className="flex border mt-10 mx-10 w-2/5 justify-between">
        <div className="flex flex-col justify-between p-2">
        <div className="text-3xl">Name: {name}</div>
        <div className="text-xl">Location: {location}</div>
        <div className="text-xl">GitHub: {login}</div> 
        </div>
        <img src={avatar_url} className="h-32"/>
        {/* <div className="text-xl">Contact: {contact}</div> */}
      </div>
    );
  }
}

export default User;
