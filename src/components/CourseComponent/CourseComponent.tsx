import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import getAllStudents from "../../services/StudentService";
import Student from "../../entities/Student";
import Instructor from "../../entities/Instructor";
import Course from "../../entities/Course";
import { getAllInstructors } from "../../services/InstructorService";
import getAllCourses from "../../services/CourseService";

const columns: GridColDef[] = [
  { field: "courseId", headerName: "ID", width: 90 },
  {
    field: "courseName",

    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "instructor",
    headerName: "Instructor",
    type: "Instructor",
    width: 1000,
    editable: true,
  },
  {
    field: "students",
    headerName: "Students",
    type: "Array<string>",
    width: 1000,
    editable: true,
  },
];

export default function InstructorComponent() {
  const [data, setData] = useState<Course[]>([]);
  useEffect(() => {
    async function getInstructors() {
      getAllCourses().then((response) => setData(response.data));
    }

    getInstructors();
  }, [data.length]);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        getRowId={(row) => data.indexOf(row)}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
