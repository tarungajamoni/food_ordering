import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }

  render() {
    const { name, contact } = this.props;
    const { count } = this.state;
    return (
      <div className=" border mt-10 mx-10 w-1/2">
        <div className="text-3xl">Name: {name}</div>
        <div className="text-xl">Designation: {this.props.designation}</div>
        <div className="text-xl">Contact: {contact}</div>
        <div className="text-lg">Count: {count}</div>
        <button
          className="border"
          onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default User;
