import React from "react";
import { NavLink } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import { Card } from "@material-ui/core";

const MainNav = () => {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          src={require("../Media/ifitLogo.jpg")}
          width="10px"
          height="10px"
        />

        <NavLink style={{ marginRight: "40px" }} to="/">
          Excercise
        </NavLink>
        <NavLink style={{ marginRight: "40px" }} to="/">
          Nutrition
        </NavLink>
        <NavLink style={{ marginRight: "40px" }} to="/">
          Activity
        </NavLink>
        <NavLink style={{ marginRight: "40px" }} to="/">
          Sleep
        </NavLink>
      </Card>
    </div>
  );
};
export default MainNav;

// background: #FFFFFF;
// box-shadow: 0 1px 2px 0 rgba(46,49,52,0.40);
