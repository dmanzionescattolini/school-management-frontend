import React, { useState } from "react";

export default class Student {
  public studentName: string;
  public studentLastName: string;
  public studentEmail: string;
  public courses: Array<string>;
  public constructor(
    studentName: string,
    studentLastName: string,
    studentEmail: string,
    courses: Array<string>
  ) {
    this.studentName = studentName;
    this.studentLastName = studentLastName;
    this.studentEmail = studentEmail;
    this.courses = courses;
  }

  toString() {
    return (
      this.studentName +
      " " +
      this.studentLastName +
      " Email: " +
      this.studentEmail
    );
  }
}
