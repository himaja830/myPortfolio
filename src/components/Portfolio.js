import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import project1 from "../assets/ToCookorNottoCook.png";
import project2 from "../assets/RockYourWorld.png";
import project3 from "../assets/ViVi.png";
import project4 from "../assets/DayPlanner.png";
import project5 from "../assets/EmployeeDirectory.png";
import project6 from "../assets/WeatherDashboard.png";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div>
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center" alignItems="center">
          {/* project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    "To Cook or Not To Cook"
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This app allows users to search recipes of favourite food
                    and near by restaurents having those recipies. Technologies
                    include:
                    Html,Css,JavaScript,Jquery,Bootstrap,API's-Yelp,geolocation
                    and spoonacular, Github to host code and deploy application.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://github.com/himaja830/Project-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a
                    href="https://stephsko.github.io/Project-1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Livedemo
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* project2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 2"
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    "Rock Your World"
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This is a rock trading app for rock lovers.Through this app
                    user can sign up and post rocks available with them for
                    trading with other rocks of other users. Technologies:
                    Html,Css,JavaScript,Jquery,Nodejs,Express Server, MongoDb
                    DB, Materialize library, Heroku Deployment, Github to host
                    code
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://github.com/himaja830/Project-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a
                    href="https://rock-trader-2020.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Livedemo
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/*project3*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 1"
                  height="140"
                  image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    "ViVi(Virtual Visitors)"
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This app is a virtual waiting room for doctors office in
                    this condition of Pandemic. Technologies:
                    React,Nodejs,React-Bootstrap,material-UI,mySql DB, Express
                    Server,Nodejs, Heroku Deployment,Github to host code.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://github.com/himaja830/project3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a
                    href="https://viviproject3.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Livedemo
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/*project4*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 1"
                  height="140"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    "Day Planner"
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This App helps to Plan hour to hour activities in a Day from
                    9am-5pm. Technologies: html,bootstrap,jquery and moment.js
                    library for date and time format.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://github.com/himaja830/Day-Planner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a
                    href="https://github.com/himaja830/Day-Planner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Livedemo
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/*project5*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 1"
                  height="140"
                  image={project5}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    "Employee Directory"
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This app utilizes an API to populate random users and then
                    create a directory. Other users on the app can search for
                    employees by "name" and also organize each field (Name,
                    Email, DOB) in ascending or descending order.This app was
                    created using REACT library.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://github.com/himaja830/Employee-Directory"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a
                    href="https://sheltered-river-65453.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Livedemo
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/*projecr6*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 1"
                  height="140"
                  image={project6}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    "Weather Dashboard"
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This Application helps to find current weather details as
                    well as next five days weather details of a particular city
                    in the World. Technologies: Html, Css, Bootstrap,
                    JavaScript, Jquery, moment.js, API- openweather Api.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://github.com/himaja830/Weather-Dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a
                    href="https://himaja830.github.io/Weather-Dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Livedemo
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Portfolio;
