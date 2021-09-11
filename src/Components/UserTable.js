import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import './UserTable.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



function UserTable(props) {
    // const {id, name, username, email, phone, website} = props.rows;
  const classes = useStyles();
  const history = useHistory();
  const handleEdit = (id) => {
      console.log();
      history.push(`/editelement/${id}`)
  }

  return (
      <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="table_head">
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Website</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.website}</TableCell>
              <TableCell>
                  <IconButton onClick={()=>props.removeItem(row.id)}>
                  <DeleteIcon align="right" ></DeleteIcon>
                  </IconButton>
                  {/* <EditIcon align="right"></EditIcon> */}
              </TableCell>
              <TableCell>
                  {/* <DeleteIcon align="right" ></DeleteIcon> */}
                  
                <EditIcon align="right" onClick={() => handleEdit(row.id)}></EditIcon>
                                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </div>
  );
}

export default UserTable;
