import React, { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css";
import CourseComponent from "./components/CourseComponent";
import StudentComponent from "./components/StudentComponent";
import InstructorComponent from "./components/InstructorComponent";
import Home from "./components/Home/Home";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <div className="App">
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">SMA | BLIT</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavSecond(!showNavSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav>
              <MDBNavbarLink active aria-current="page" href="/">
                Home
              </MDBNavbarLink>
              <MDBNavbarLink href="/instructors">Instructors</MDBNavbarLink>
              <MDBNavbarLink href="/courses">Courses</MDBNavbarLink>
              <MDBNavbarLink href="/students">Students</MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
  <BrowserRouter<Routes>
          <Route element={<CourseComponent />} path={"/courses"} />
          <Route element={<StudentComponent />} path={"/students"} />
          <Route element={<InstructorComponent />} path={"/instructors"} />
          <Route element={<Home />} path={"/"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
