import React, { useEffect, useState } from "react";

import Course from "../../entities/Course";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import axios from "axios";
import Student from "../../entities/Student";
import getAllCourses, { CourseInterface } from "../../services/CourseService";
import { getAllInstructors } from "../../services/InstructorService";
import Instructor from "../../entities/Instructor";
//import { Test } from './CourseComponent.styles';

const CourseComponent = () => {
  const [data, setData] = useState<Array<CourseInterface>>([]);

  React.useEffect(() => {
    getAllCourses().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <MDBContainer fluid>
      <p className="lead w-100 mx-50 m-2" style={{ textAlign: "center" }}>
        Courses
      </p>
      <MDBTable striped bordered hover small>
        <MDBTableHead>
          <tr>
            <th>Name</th>
            <th>Instructor</th>
            <th>Students</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((course) => (
            <tr>
              <td>{course.courseName}</td>
              <td>{course.instructor}</td>
              <td>
                <MDBListGroup
                  style={{ maxHeight: "200px", overflowY: "scroll" }}
                >
                  {course.students.map((student) => (
                    <MDBListGroupItem>{student}</MDBListGroupItem>
                  ))}
                </MDBListGroup>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
};

export default CourseComponent;
