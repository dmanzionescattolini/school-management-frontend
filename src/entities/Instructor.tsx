import React from "react";
import Course from "./Course";
export default class Instructor {
  public instructorName: string;

  public courses: Array<Course>;
  public instructorId: number;
  public constructor(
    instructorId: number,
    instructorName: string,

    coursez?: Array<Course>
  ) {
    this.instructorName = instructorName;

    this.instructorId = instructorId;
    this.courses = coursez || [];
  }

  toString(): string {
    return (
      this.instructorName +
      "\nInstructor: " +
      "\nId: " +
      this.instructorId +
      "\nCourses: " +
      this.courses.length
    );
  }
}
