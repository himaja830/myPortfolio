import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "skyblue",
      "&:hover": {
        fill: "white",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <BottomNavigation width="auto" style={{ background: "#222" }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={
            <IconButton
              aria-label="Linkedin.com"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/himaja-sriramaneni-994937164/"
                )
              }
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          }
        />

        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={
            <IconButton
              aria-label="Github.com"
              onClick={() => window.open("hhttps://github.com/himaja830")}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          }
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
