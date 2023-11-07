import React, { useState } from "react";
import Student from "./Student";
import Instructor from "./Instructor";

class Course {
  getInstructor() {
    throw new Error("Method not implemented.");
  }
  private name?: string;
  private instructor?: Instructor;
  private students?: Array<Student>;
  private id?: number;

  constructor() {}

  getName(): string | undefined {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }

  getInstructors(): Instructor | undefined {
    return this.instructor;
  }
  public getStudents(): Array<Student> | undefined {
    return this.students;
  }
  public setId(id: number): void {
    this.id = id as number;
  }

  getId(): number | undefined {
    return this.id;
  }
  setInstructors(instructor: Instructor): void {
    this.instructor = instructor;
  }

  toString() {
    return this.name || "no-name";
  }

  setStudents(students: Array<Student>): void {
    this.students = students;
  }
}

export default Course;
