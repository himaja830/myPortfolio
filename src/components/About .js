import React from "react";
import Navbar from "./Navbar";

import myImg from "../assets/myimg3.png";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  text: {
    fontStyle: "oblique",
    fontFamily: " Arial, Helvetica, sans-serif",
    color: "skyblue",
  },
  Avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <Box component="div">
        <Navbar />
        <Grid>
          <Typography variant="h4" align="center" className={classes.text}>
            A little about me....
          </Typography>
        </Grid>

        <Grid>
          <span>
            <Avatar
              src={myImg}
              alt="Picture of Himaja"
              className={classes.Avatar}
            />
            <Typography
              component="p"
              align="center"
              style={{
                color: "white",
                fontFamily: " Arial, Helvetica, sans-serif",
              }}
            >
              Hello! Welcome to my Portfolio Page. I'm Himaja.I'm Full stack Web
              developer graduated from UT Austin Full stack Web Developer Boot
              Camp . Coming to my Backgroud, Im a pharmacist who has been
              surrounded by developers in friends and Family. This helped me to
              know about web development peripherally.When I had a plan to
              switch my Career,just thought of giving a try to the Web
              development.Then got myself introduced to Web Development through
              online resources such as W3 schools, Udemy, FreeCodeCamp. While
              learning through these resources and practicing coding, I found
              myself verymuch involded in it and enjoyed every bit of
              learning.It's then I decided to take a Career switch from being a
              pharmacist to Web Developer.Later got enrolled in Fullstack Web
              development BootCamp that helped me to become a Full Stack Web
              Developer. The result of my learning Experience in BootCamp is
              this Portfolio which I built to Showcase some of my Work, that i
              have done through my learning process.
            </Typography>
          </span>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
