import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = (props) => {
  return (
    <>
      {/* <div className="container"> */}
      <div className="list-group">
        <Link
          to="#"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Selecione uma opção
        </Link>
        <Link
          to="/portfolio"
          className="list-group-item list-group-item-action"
        >
          Portfólio
        </Link>

        {/* <Link to="#" className="list-group-item list-group-item-action">
          Link third link item
        </Link> */}

        {/* <Link to="#" className="list-group-item list-group-item-action">
          Link fourth link item
        </Link> */}

        {/* <Link
          to="#"
          className="list-group-item list-group-item-action disabled"
          tabindex="-1"
          aria-disabled="true"
        >
          Link disabled link item
        </Link> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default AdminMenu;
