import React from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";

import { makeStyles } from "@material-ui/styles";
import image1 from "../assets/resume1.png";
import image2 from "../assets/resume2.png";
import GetAppIcon from "@material-ui/icons/GetApp";
import PDF from "../assets/NewResume.pdf";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "white",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100vh",
    margin: "auto",
  },
  imageContainer: {
    display: "grid",
    height: "100%",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />;
      <button>
        <a href={PDF} title="" download>
          <GetAppIcon style={{ color: "skyblue", fontSize: "25px" }} />
        </a>
      </button>
      <Box className={classes.mainContainer}>
        <div align="center" className={classes.imageContainer}>
          <img src={image1} alt="resume1" className={classes.image} />
          <img src={image2} alt="resum2" className={classes.image} />
        </div>
      </Box>
    </div>
  );
};

export default Resume;
