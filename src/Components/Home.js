import React from "react";
import Hero from "./Hero";
const Home = () => {
  return <Hero />;
};

export default Home;

// function Hero(props) {
//   const { classes } = props;
//   return (
//     <Card className={classes.card}>
//       <div className={classes.con}>
//         <CardContent className={classes.content}>
//           <div style={{ position: "relative" }}>
//             <CardMedia>
//               <img src={heroLogo} />
//             </CardMedia>
//             <div
//               style={{
//                 position: "absolute",
//                 color: "white",
//                 top: 8,
//                 left: "50%",
//                 transform: "translateX(-50%)"
//               }}
//             >
//               Your text
//             </div>
//           </div>
//         </CardContent>
//       </div>
//     </Card>
//   );
// }
