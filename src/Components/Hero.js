import React from "react";
import heroLogo from "../Media/gmapsinworkout.png"; // Tell webpack this JS file uses this image
import SignUpButton from "./SignUpButton";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Card, CardContent } from "@material-ui/core";
const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 800
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  container: {
    position: "relative",
    textAlign: "center"
  },
  topasad: {
    position: "absolute",
    top: "10%",
    left: "50%"
  },

  media: {
    display: "flex",
    height: 100,
    objectFit: "contain",
    alignItems: "left"
  }
});

function Hero(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.con}>
        <CardContent className={classes.content}>
          <div style={{ position: "relative" }}>
            <CardMedia
              component="img"
              className={classes.media}
              src={heroLogo}
            />
            <div
              style={{
                position: "absolute",
                color: "white",
                top: 8,
                left: "50%",
                transform: "translateX(-50%)"
              }}
            >
              <SignUpButton />
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

// export default Header
export default withStyles(styles)(Hero);
