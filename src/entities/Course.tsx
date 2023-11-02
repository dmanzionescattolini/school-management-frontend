import React, { useState } from "react";
import Student from "./Student";
import Instructor from "./Instructor";

class Course {
  getInstructor() {
    throw new Error("Method not implemented.");
  }
  private name?: string;
  private instructorId?: number;
  private students?: Array<Student>;
  private id?: number;

  constructor() {}

  getName(): string | undefined {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }

  getInstructorId(): number | undefined {
    return this.instructorId;
  }
  getStudents(): Array<Student> | undefined {
    return this.students;
  }
  setId(id: number): void {
    this.id = id as number;
  }

  getId(): number | undefined {
    return this.id;
  }

  setInstructorId(id: number): void {
    this.instructorId = id as number;
  }

  toString() {
    return this.name || "no-name";
  }

  setStudents(students: Array<Student>): void {
    this.students = students;
  }
}

export default Course;
