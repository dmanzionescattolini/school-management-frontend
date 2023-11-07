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
  public getInstructorId(): number {
    return this.instructorId;
  }
  public setInstructorId(id: number): void {
    this.instructorId = id as number;
  }
  public getInstructorName(): string {
    return this.instructorName;
  }
  public setInstructorName(name: string): void {
    this.instructorName = name as string;
  }

  public getCourses(): Array<Course> {
    return this.courses;
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
