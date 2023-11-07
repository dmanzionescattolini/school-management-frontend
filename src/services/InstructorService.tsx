import React, { useState, useEffect } from "react";
import Instructor from "../entities/Instructor";

import Course from "../entities/Course";
import axios from "axios";
import { CourseInterface } from "./CourseService";

export interface InstructorInterface {
  instructorName: string;

  courses: Array<String>;
}
export function getAllInstructors() {
  return axios.get("http://localhost:8080/instructors");
}
// export function getInstructorById(instructorId: number): Instructor {
//   let instructor;
//   let instructors = getAllInstructors();
//   return instructors.filter(
//     (instructor) => instructorId === instructor.getInstructorId()
//   )[0];
// }
