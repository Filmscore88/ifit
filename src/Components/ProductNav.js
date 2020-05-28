import React from "react";
import { NavLink } from "react-router-dom";

const ProductNav = () => {
  return (
    <div>
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
