import "./datatable.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../utils/datatablesource";
import { useState } from "react";


const Datatable = () => {
  const [data, setData] = useState();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{textDecoration: "none"}}>
              <div className="viewButton">View</div>
            </Link>
            <div
              onClick={() => handleDelete(params.roe.id)}
             className="deleteButton"
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ]

  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">Add New</Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      ></DataGrid>
    </div>
  )
}

export default Datatable