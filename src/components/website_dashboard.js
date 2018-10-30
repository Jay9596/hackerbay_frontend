import React, { Component } from "react";
import { connect } from "react-redux";
import AddWebsite from "./website_add";
import ListWebsite from "./website_list";

class WebDashboard extends Component {
  constructor() {
    super();
    this.refresh = false
  }

  refreshList() {
    this.refresh = !this.refresh
    console.warn("Called refresh")
  }

  render() {
    return (
      <div>
        <div className="welcome">
          <p>Welcome Name</p>
          <button type="Logout">Logout</button>
        </div>
        <div className="add_website">
          <AddWebsite token={this.props.token} callRefresh={this.refreshList} />
        </div>
        <div className="website_list">
          <ListWebsite token={this.props.token} refresh={this.refresh} />
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    token: state.login.token
    // name: state.login.name
  };
})(WebDashboard);

// export default WebDashboard;
