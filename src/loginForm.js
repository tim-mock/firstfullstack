import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e, string) => {
    // console.log("event!", e.target, string);
    // if (e.target.name == 'username') {
    //     this.setState({ username: e.target.value })
    // }
    // if (e.target.name == 'password') {
    //     this.setState({ password: e.target.value })
    // }
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log("second", this.state)
    );
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = this.state;
    this.props.addUser(newUser);
    this.setState({ username: "", password: "" });
    console.log("submited");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            maxLength="30"
            placeholder="username"
            id="username"
            name="username"
            onChange={(event) => this.handleChange(event, "hey boss")}
            value={this.state.username}
          />{" "}
          <br />
          <input
            type="passsword"
            maxLength="30"
            placeholder="password"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
