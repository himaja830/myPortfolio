import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />

      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "skyblue",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Let's Talk...
          </Typography>
          <br />
          <IconButton aria-label="Email">
            <a
              target="_top"
              rel="noopener noreferrer"
              href="mailto:himaja.sriramaneni@gmail.com"
            >
              <EmailIcon style={{ color: "skyblue", fontSize: "50px" }} />{" "}
              {/* icon */}
            </a>
          </IconButton>

          <IconButton aria-label="Mobile">
            <a target="_top" rel="noopener noreferrer" href="tel:512-905-5117">
              <CallIcon style={{ color: "skyblue", fontSize: "50px" }} />
              {/* icon */}
            </a>
          </IconButton>

          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/himaja-sriramaneni-994937164/"
              )
            }
          >
            <LinkedInIcon style={{ color: "skyblue", fontSize: "50px" }} />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
