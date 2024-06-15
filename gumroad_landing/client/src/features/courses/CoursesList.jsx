import React, {useState, useEffect} from "react";

//import { API_URL } from "../../constants";
const API_URL = "http://127.0.0.1:3000/api/v1"

function CoursesList() {
    //Fetch courses somehow
    const [courses, setCourses] = useState([]);
    const [,setLoading] = useState(true);
    const [,setError] = useState(null);
    //fetch posts from rails API
    useEffect(() => {
        async function loadCourses(){
            console.log(API_URL);
            try {
                const response = await fetch(`${API_URL}/courses`);
                if (response.ok){
                    const json = await response.json();
                    setCourses(json);
                }else {
                    throw response;
                }
            } catch (e) {
                setError("An Error Occured...");
                console.log("An error occurred", e);
            } finally {
                setLoading(false);
            }
        }
        loadCourses();

    },[]);

    return (
        <div>
            {courses.map((course) =>(
                <div key={course.id} className="course-container">
                    <h1>{course.title}</h1>
                    <p>{course.price}</p>
                </div>
            ))}
        </div>
    )
}

export default CoursesList;