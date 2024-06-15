import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Rating, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const API_URL = "http://127.0.0.1:3000/api/v1";

const useStyles = makeStyles((theme) => ({
  courseCard: {
    width: 300,
    height: 450,
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2),
  },
  courseMedia: {
    height: 200,
  },
  courseContent: {
    flexGrow: 1,
  },
  authorInfo: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  authorAvatar: {
    marginRight: theme.spacing(1),
  },
}));

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
              <Typography gutterBottom variant="h5" component="h2">
                {course.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: {course.price}
              </Typography>
              <Rating
                value={course.ratingVal}
                precision={0.5}
                readOnly
                size="small"
              />
              <Typography variant="body2" color="textSecondary" component="p">
                {course.ratingAmt} ratings
              </Typography>
              <div className={classes.authorInfo}>
                <Avatar className={classes.authorAvatar} src={course.authorAvi} />
                <Typography variant="body2" color="textSecondary">
                  Author Name
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CoursesList;