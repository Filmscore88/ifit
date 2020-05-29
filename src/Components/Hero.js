import React from "react";
import heroLogo from "../Media/gmapsinworkout.jpg";
import SignUpButton from "./SignUpButton";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Card, CardContent } from "@material-ui/core";
const useStyles = makeStyles => ({
  card: {
    display: "flex"
  },

  content: {
    flex: "1 0 auto"
  },

  media: {
    display: "flex",
    objectFit: "contain",
    alignItems: "left"
  }
});

const Hero = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div>
          <CardMedia
            component="img"
            className={classes.media}
            src={heroLogo}
            width="100%"
            height="100%"
          />
          <div
            style={{
              position: "absolute",
              bottom: 300,
              left: "35%",
              color: "White",
              fontSize: "40px"
            }}
          >
            <p> The best personal training,</p>
            <p>right in your home</p>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 250,
              left: "45%",
              transform: "translateX(-50%)"
            }}
          >
            <SignUpButton />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// export default Header
export default Hero;
