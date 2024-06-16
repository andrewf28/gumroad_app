import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";
const API_URL = "http://127.0.0.1:3000/api/v1";

const useStyles = makeStyles((theme) => ({
    courseCard: {
        width: 200,
        height: 450,
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(2),
        backgroundColor: "#000000",
        color: "#ffffff",
        borderRadius: 4,
        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05)",
        transition: "0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow, 0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12)",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)",
          border: "1px solid #ccc",
          borderBottomRightRadius: 10,
        },
    },
    courseMedia: {
      height: 200,
      position: "relative",
      borderBottom: "1px solid #fff",
      "& img": {
        width: "100%",
        height: "auto",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      },
    },
    courseContent: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.divider}`,
        justifyContent: "space-between", // Added to position the button container at the bottom
      },
    authorInfo: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(2),
    },
    authorAvatar: {
      marginRight: theme.spacing(1),
    },
    cardButton: {
        alignSelf: "flex-start",
        borderTop: '1px solid #fff',
        marginBottom: theme.spacing(1),
        backgroundColor:"#ed51d8",
        // marginLeft: theme.spacing(1),
        ratingContainer: {
            display: "flex",
            alignItems: "flex-start",
            marginTop: theme.spacing(1),
      },
    },
      
    ratingContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(1),
    },
    buttonContainer: {
        borderTop: "1px solid #fff",
        display: "flex",
        justifyContent: "flex-start", // Align the button to the left
        paddingLeft: theme.spacing(.1), // Add left padding to create space
        width: "100%",
        padding: theme.spacing(2),
        marginTop: "auto",
        height: 20,
      },
    starIcon: {
      marginRight: theme.spacing(1),
      fill: "#ffcc00",
    },
  }));


  function StarIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </svg>
    );
  }

  const Star = ({ size, color }) => {
    return (
      <span
        style={{
          display: 'inline-block',
          width: size,
          height: size,
          backgroundColor: color,
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          marginRight: '5px',
        }}
      />
    );
  };
  
  

function CoursesList() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    async function loadCourses() {
      console.log(API_URL);
      try {
        const response = await fetch(`${API_URL}/courses`);
        if (response.ok) {
          const json = await response.json();
          setCourses(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError("An Error Occurred...");
        console.log("An error occurred", e);
      } finally {
        setLoading(false);
      }
    }
    loadCourses();
  }, []);

  return (
    <Grid container justify="center">
      {courses.map((course) => (
        <Grid item key={course.id}>
          <Card className={classes.courseCard}>
            <CardMedia
              className={classes.courseMedia}
              image={course.courseImage}
              title={course.title}
            />
            <CardContent className={classes.courseContent}>
            <Typography gutterBottom variant="h5" component="h2" align="left">
            {course.title}
          </Typography>
              <div className={classes.authorInfo}>
                <Avatar className={classes.authorAvatar} src={course.authorAvi} />
                <Typography variant="body2">
                  Author Name
                </Typography>
              </div>
              <div className={classes.ratingContainer}>
              <Star size={10} color={"#ffffff"} />
                <Typography variant="body2" component="span">
                  {course.ratingVal} ({course.ratingAmt})
                </Typography>
              </div>
              <div className={classes.buttonContainer}>
              <Button variant="contained" className={classes.cardButton}>
                ${course.price}
              </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}


export default CoursesList;