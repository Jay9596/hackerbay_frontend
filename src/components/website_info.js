import React, { Component } from "react";

class WebsiteInfo extends Component {
  render() {
    return (
      <div>
        <div>
          <p className="name">Name</p>
          <p>{this.props.name}</p>
        </div>
        <div>
          <p className="url">URL</p>
          <p>{this.props.url}</p>
        </div>
        <div>
          <p className="status">Status</p>
          <p>{this.props.status}</p>
        </div>
      </div>
    );
  }
}

export default WebsiteInfo;
