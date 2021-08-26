import * as React from "react";
import {
  TextField,
  FormControlLabel,
  IconButton,
  Modal,
  Grid,
  Typography,
  Switch,
  Button,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .table-head": {
      backgroundColor: "blue",
      color: "white",
    },
    "& .table-row-even": {
      backgroundColor: "#dfdfdf",
      color: "white",
    },
    "& .table-row-odd": {
      backgroundColor: "#40acfb",
      color: "white",
    },
  },
  paper: {
    position: "absolute",
    width: 400,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CompanySearch() {
  const classes = useStyles();
  const [rowDat, setrowDat] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [checked, setChacked] = React.useState(true);

  const MatEdit = ({ index }) => {
    const handleEditClick = () => {
      setOpen(true);
    };

    return (
      <FormControlLabel
        control={
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
        }
      />
    );
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      headerClassName: "table-head",
    },
    {
      field: "firstName",
      headerName: "First name",
      headerClassName: "table-head",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      headerClassName: "table-head",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerClassName: "table-head",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      headerClassName: "table-head",
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      headerClassName: "table-head",
      width: 140,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}>
            <MatEdit index={params.row.id} />
          </div>
        );
      },
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 100 },
    { id: 6, lastName: "Melisandre", firstName: "pop", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  React.useEffect(() => {
    if (search.length > 0) {
      let filterdData = rows.filter((row) =>
        row.firstName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      console.log("Search", filterdData);
      setrowDat(filterdData);
    } else {
      setrowDat(rows);
    }
  }, [search]);

  return (
    <>
      {/* search   */}
      <div
        style={{
          width: "100%",
          margin: "5px",
          display: "flex",
          justifyContent: "flex-end",
        }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* table   */}
      <div style={{ height: 400, width: "100%" }} className={classes.root}>
        <DataGrid
          getRowClassName={(params) =>
            `table-row-${
              params.getValue(params.id, "id") % 2 == 0 ? "even" : "odd"
            }`
          }
          rows={rowDat}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
        />
      </div>

      {/* Model Container */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div
          style={{
            top: `20%`,
            left: `30%`,
          }}
          className={classes.paper}>
          {/* field Container */}
          <Grid container style={{ height: "60%" }}>
            <Grid
              item
              style={{ justifyContent: "space-around", display: "flex" }}>
              <Typography style={{ margin: 5 }}>Item 1</Typography>
              <TextField
                id="outlined-basic"
                label="Item 1"
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              style={{ justifyContent: "space-around", display: "flex" }}>
              <Typography style={{ margin: 5 }}>Item 2</Typography>
              <TextField
                id="outlined-basic"
                label="Item 2"
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              style={{ justifyContent: "space-around", display: "flex" }}>
              <Typography style={{ margin: 5 }}>Item 3</Typography>
              <TextField
                id="outlined-multiline-static"
                label="item 2"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
              />
            </Grid>
          </Grid>

          {/* option Container */}
          <Grid Container>
            <Typography>Options</Typography>
            <Grid
              Item
              style={{ justifyContent: "space-around", display: "flex" }}>
              <Typography>category</Typography>
              <Switch
                checked={checked}
                onChange={setChacked}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>
            <Grid
              Item
              style={{ justifyContent: "space-around", display: "flex" }}>
              <Typography>category</Typography>
              <Switch
                checked={checked}
                onChange={setChacked}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>
            <Grid
              Item
              style={{ justifyContent: "space-around", display: "flex" }}>
              <Typography>category</Typography>
              <Switch
                checked={checked}
                onChange={setChacked}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>
          </Grid>

          {/* Action container */}
          <Grid
            container
            style={{ justifyContent: "flex-end", display: "flex" }}>
            <Grid Item style={{ marginRight: 5 }}>
              <Button variant="contained" color="primary">
                save
              </Button>
            </Grid>

            <Grid Item>
              <Button variant="contained" color="primary">
                save as
              </Button>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </>
  );
}
