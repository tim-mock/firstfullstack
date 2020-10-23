import React from "react";

import LoginForm from "./loginForm";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        username: "",
        password: "",
      },
    };
  }

  addUser = (user) => {
    this.setState({ newUser: user });
    console.log("user", user);
  };

  render() {
    return (
      <div>
        <p>hey boss</p>
        <LoginForm addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
