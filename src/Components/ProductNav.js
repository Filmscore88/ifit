import React from "react";
import { NavLink } from "react-router-dom";

const ProductNav = () => {
  return (
    <div
      style={{
        background: "#e9e3d4",
        borderBottom: "2px solid black",
        paddingTop: "10px",
        paddingBottom: "10px",
        marginBottom: "12px",
        textAlign: "center"
      }}
    >
      <NavLink style={{ marginRight: "40px" }} to="/">
        Blog
      </NavLink>
      <NavLink style={{ marginRight: "40px" }} to="/">
        Nourish
      </NavLink>
      <NavLink style={{ marginRight: "40px" }} to="/">
        Shop
      </NavLink>
    </div>
  );
};
export default ProductNav;
