import { useState } from 'react'


import './App.css'
import CoursesList from "./features/courses/CoursesList"

function App() {
  const [count, setCount] = useState(0)

  return <>
  <h1>Creator Landing Page</h1>
  <CoursesList/>
  </> 
}

export default App
