import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import getAllStudents from "../../services/StudentService";
import Student from "../../entities/Student";

const columns: GridColDef[] = [
  { field: "studentId", headerName: "ID", width: 90 },
  {
    field: "studentName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "studentLastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "studentEmail",
    headerName: "Email",
    type: "string",
    width: 200,
    editable: true,
  },
  {
    field: "courses",
    headerName: "Courses",
    sortable: true,
    type: "array",
    width: 160,
    editable: true,
  },
];

export default function StudentComponent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = useState<Student[]>([]);
  useEffect(() => {
    async function getStudents() {
      getAllStudents().then((response) => setData(response.data));
    }

    getStudents();
  }, [data.length]);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
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
