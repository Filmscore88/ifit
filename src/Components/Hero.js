import React from "react";
import heroLogo from "../Media/gmapsinworkout.png"; // Tell webpack this JS file uses this image
import SignUpButton from "./SignUpButton";
import Image from "react-bootstrap/Image";
const Hero = () => {
  // Import result is the URL of your image
  return (
    <div>
      <Image
        src={heroLogo}
        style={{ width: "1240px", height: "601px" }}
        alt="Logo"
      >
        <SignUpButton />
      </Image>
    </div>
  );
};
export default Hero;
