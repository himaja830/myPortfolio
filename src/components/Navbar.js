import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileLeftMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import avatar from "../assets/avatar.png";
import DehazeIcon from "@material-ui/icons/Dehaze";
import InfoIcon from "@material-ui/icons/Info";

// CSS styles

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
    backgroundColor: "white",
  },
  Avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "skyblue",
  },
  listText: {
    color: "black",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <InfoIcon />,
    listText: "About",
    listPath: "/about",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const Navbar = () => {
  const [state, setstate] = useState({
    left: false,
  });

  const toggleSlider = (slider, open) => () => {
    setstate({ ...state, [slider]: open });
  };
  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar
        className={classes.Avatar}
        src={avatar}
        alt="Himaja Sriramaneni"
      />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listText}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Box component="nav">
        <AppBar position="static" style={{ background: "white" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("left", true)}>
              <DehazeIcon style={{ color: "skyblue" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "black" }}>
              Portfolio
            </Typography>
            <MobileLeftMenuSlider
              open={state.left}
              onClose={toggleSlider("left", false)}
            >
              {sideList("left")}
              <Footer />
            </MobileLeftMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Navbar;
