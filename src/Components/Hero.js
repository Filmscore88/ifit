import React from "react";
import heroLogo from "../Media/gmapsinworkout.png"; // Tell webpack this JS file uses this image
const Hero = () => {
  // Import result is the URL of your image
  return (
    <img
      src={heroLogo}
      style={{ width: "200px", height: "200px" }}
      alt="Logo"
    />
  );
};
export default Hero;
