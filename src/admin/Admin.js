import React, { Component } from "react";
import { Route } from "react-router-dom";
import AdminMenu from "./adminMenu/AdminMenu";
import AdminPortfolio from "./adminPortfolio/AdminPortfolio";

class Admin extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>Painel Administrativo</h2>
        <Route path={`/`} component={AdminMenu} />
        <Route
          path={`${this.props.match.url}/portfolio`}
          component={AdminPortfolio}
        />
      </>
    );
  }
}

export default Admin;
