import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Course from "./entities/Course";
import Student from "./entities/Student";
import Instructor from "./entities/Instructor";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const AppContextProvider = createContext({
  courses: Array<Course>,
  students: Array<Student>,
  instructors: Array<Instructor>,
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
