import React from "react";
import Student from "../entities/Student";
import axios from "axios";
import { CourseInterface } from "./CourseService";

interface StudentInterface {
  studentName: string;
  studentLastName: string;

  studentEmail: string;
  courses: Array<String>;
}
export default function getAllStudents() {
  return axios.get("http://localhost:8080/students");
}

// export function getStudentById(studentId: number): Student {
//   let student;
//   let students = getAllStudents();
//   return students.filter((student) => studentId === student.getId())[0];
// }
