import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useState } from "react";
import "./Home.css";

export default function Home() {
  return (
    <header>
      <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Hibbing_High_School_2014.jpg/1920px-Hibbing_High_School_2014.jpg')",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">School Management Application</h1>
              <h5 className="mb-4">Binary Logic IT</h5>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                rel="nofollow"
                target="_blank"
                href="/login"
              >
                Log in
              </MDBBtn>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                target="_blank"
                href="/students/register"
              >
                Sign Up
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
