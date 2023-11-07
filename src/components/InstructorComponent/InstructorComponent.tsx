import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import getAllStudents from "../../services/StudentService";
import Student from "../../entities/Student";
import Instructor from "../../entities/Instructor";
import { getAllInstructors } from "../../services/InstructorService";

const columns: GridColDef[] = [
  { field: "instructorId", headerName: "ID", width: 90 },
  {
    field: "instructorName",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "courses",
    headerName: "Courses",
    type: "Array<string>",
    width: 1000,
    editable: true,
  },
];

export default function InstructorComponent() {
  const [data, setData] = useState<Instructor[]>([]);
  useEffect(() => {
    async function getInstructors() {
      getAllInstructors().then((response) => setData(response.data));
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
