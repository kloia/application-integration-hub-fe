import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, col1: "hello", col2: "world" },
  { id: 2, col1: "goodbye", col2: "world" },
  { id: 3, col1: "datagrid", col2: "is awesome" },
];

//field =>Required
const columns = [
  { field: "col1", headerName: "Title", width: 150 },

  { field: "col3", headerName: "Calls", width: 150 },
];
const Users = () => {
  return (
    <div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default Users;
