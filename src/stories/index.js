import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";
import store from "../store";

import SimpleComponent from "../components/simple-component";
import Login from "../components/login-form";
import Signup from "../components/sign-up-form";

storiesOf("Simple Component", module).add("Simple Component", () => (
  <SimpleComponent />
));

storiesOf("Login Form", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("Login Form", () => <Login />);

storiesOf("Signup Form", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("Signup Form", () => <Signup />);
