import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../assets/avatar.png";
import Typed from "react-typed";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    color: "skyblue",
  },
  subtitle: {
    color: "white",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: "1",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar
            src={avatar}
            alt="Himaja Sriramaneni"
            className={classes.avatar}
          />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Himaja Sriramaneni"]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={["Full Stack Web Developer-MERN Stack"]}
            typeSpeed={40}
          />
        </Typography>
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Html",
              "Css",
              "JavaScript",
              "Nodejs",
              "Express",
              "mySql",
              "MongoDB",
              "Git",
              "Github",
              "Heroku",
              "React",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
      </Box>
    </div>
  );
};
export default Header;
