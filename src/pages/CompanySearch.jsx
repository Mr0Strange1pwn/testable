
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 100 },
  { id: 6, lastName: 'Melisandre', firstName: 'pop', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function CompanySearch() {

  const [rowDat, setrowDat] = React.useState([])
const [search, setSearch] = React.useState('')


  React.useEffect(()=>{

    if(search.length > 0) {
     

     let filterdData = rows.filter(row => row.firstName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
     console.log('Search',filterdData)
     setrowDat(filterdData)
    }else{
      setrowDat(rows)
    }

  },[search])


  return (
   <>
   {/* search   */}
   <div>
   <TextField id="outlined-basic" label="Search" variant="outlined" onChange={e => setSearch(e.target.value)} />
   </div>

   {/* table   */}
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowDat}
        columns={columns}
        pageSize={5}
      
        disableSelectionOnClick
      />
    </div>
   </>
  );
}
