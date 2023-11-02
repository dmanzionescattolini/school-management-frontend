import axios from "axios";
import Course from "../entities/Course";
import React, { useState } from "react";
import Student from "../entities/Student";
import { getAllInstructors } from "./InstructorService";
import Instructor from "../entities/Instructor";
let courses = new Array<Course>();
export interface CourseInterface {
  [x: string]: {};
  course: {};
  courseName: string;

  instructor: string;
  students: Array<string>;
}
const getAllCourses = () => {
  return axios.get("http://localhost:8080/courses");
};

export default getAllCourses;
