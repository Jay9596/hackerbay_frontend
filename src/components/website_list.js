import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchList } from "../actions/list-website";
import WebsiteInfo from "./website_info";

class ListWebsites extends Component {
  constructor() {
    super();
    // this.list = null;
  }

  componentDidMount() {
    console.log("Getting list");
    this.props.fetchList(this.props.token);
  }

  render() {
    const {
      listError,
      listFailure,
      listRequest,
      listSuccess,
      list
    } = this.props.list_website;
    return (
      <div>
        <div>
          <p>Websites</p>
        </div>
        <ul>
          <li>List of websites</li>
          {listSuccess &&
            list.map(l => (
              <li>
                <WebsiteInfo name={l.name} url={l.url} status={l.status} />
              </li>
            ))}
        </ul>
        {listFailure && <span className="error_msg">Error: {listError}</span>}
        {listRequest && <span className="Loading"> Fetching Data..</span>}
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      list_website: state.listWebsite
    };
  },
  { fetchList }
)(ListWebsites);
