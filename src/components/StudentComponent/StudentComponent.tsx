import React, { useState } from "react";
import getAllStudents from "../../services/StudentService";
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
import Student from "../../entities/Student";

//import { Test } from './StudentComponent.styles';

const StudentComponent = () => {
  const [data, setData] = useState<Array<Student>>([]);

  React.useEffect(() => {
    getAllStudents().then((response) => setData(response.data));
  }, []);
  return (
    <MDBContainer fluid>
      <p className="lead w-100 mx-50 m-2" style={{ textAlign: "center" }}>
        Students
      </p>
      <MDBTable striped bordered hover small>
        <MDBTableHead className="">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Classes Enrolled</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((student: Student) => (
            <tr>
              <td>{student.studentName}</td>
              <td>{student.studentLastName}</td>
              <td>{student.studentEmail}</td>
              <td>{student.courses}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
};
export default StudentComponent;
