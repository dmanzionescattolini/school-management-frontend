import React, { useState } from "react";
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
  return axios({
    auth: {
      username: "donato",
      password: "donato2023",
    },
    url: "http://localhost:8080/students",
    method: "GET",
  });
}

// export function getStudentById(studentId: number): Student {
//   let student;
//   let students = getAllStudents();
//   return students.filter((student) => studentId === student.getId())[0];
// }

export async function registerStudent(user: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<void> {
  return axios.post("http://localhost:8080/students/register", user);
}
