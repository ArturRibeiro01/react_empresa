import React, { Component } from "react";
import AdminMenu from "./adminMenu/AdminMenu";

class Admin extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>Painel Administrativo</h2>
        <AdminMenu />
      </>
    );
  }
}

export default Admin;
