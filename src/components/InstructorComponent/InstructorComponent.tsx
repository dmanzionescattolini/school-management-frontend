import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Instructor from "../../entities/Instructor";
import axios from "axios";
import { CourseInterface } from "../../services/CourseService";

export default function InstructorComponent() {
  const [data, setData] = useState<Array<Instructor>>([]);
  useEffect(() => {
    axios.get("http://localhost:8080/instructors").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <MDBContainer fluid>
      <p className="lead w-100 mx-50 m-2" style={{ textAlign: "center" }}>
        Instructors
      </p>

      <MDBTable striped bordered hover small>
        <MDBTableHead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((instructor: Instructor) => {
            return (
              <tr>
                <td>{instructor.instructorId}</td>
                <td>{instructor.instructorName}</td>
                <td>{instructor.courses.toString()}</td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}
