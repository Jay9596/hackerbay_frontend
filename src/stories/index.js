import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";
import store from "../store";

import SimpleComponent from "../components/simple-component";
import Login from "../components/login-form";
import Signup from "../components/sign-up-form";
import AddWebsite from "../components/website_add";
import ListWebsite from "../components/website_list";
import WebsiteInfo from "../components/website_info";

storiesOf("Simple Component", module).add("Simple Component", () => (
  <SimpleComponent />
));

storiesOf("Login Form", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("Login Form", () => <Login />);

storiesOf("Signup Form", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("Signup Form", () => <Signup />);

storiesOf("Add Website Component", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("Add Website", () => <AddWebsite />);

storiesOf("List Website Component", module).add("Website Info", () => (
  <WebsiteInfo
    name="Name of Website"
    url="www.url_of_website.com"
    status="online"
  />
));
