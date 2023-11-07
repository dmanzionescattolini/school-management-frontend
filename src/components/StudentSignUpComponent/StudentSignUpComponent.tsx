import React, { ChangeEvent, FormEvent } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { registerStudent } from "../../services/StudentService";
interface StudentUserDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export default function StudentSignUpComponent() {
  const [user, setUser] = React.useState<StudentUserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    setUser({
      ...user,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    });
    event.preventDefault();
    registerStudent(user);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setUser({
      ...user,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            id="form3Example1"
            onChange={handleChange}
            label="First name"
            name="firstName"
          />
        </MDBCol>
        <MDBCol>
          <MDBInput id="form3Example2" label="Last name" name="lastName" />
        </MDBCol>
      </MDBRow>
      <MDBInput
        className="mb-4"
        type="email"
        name="email"
        id="form3Example3"
        label="Email address"
      />

      <MDBInput
        className="mb-4"
        type="password"
        name="password"
        id="form3Example4"
        label="Password"
      />

      <MDBBtn type="submit" className="mb-4" block>
        Sign in
      </MDBBtn>
    </form>
  );
}
