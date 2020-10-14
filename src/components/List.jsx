import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./List.css";

const List = (props) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className="container">
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="header">
          <TableRow>
            <TableCell align="left">Rank</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Source</TableCell>
            <TableCell align="left">Industry(s)</TableCell>
            <TableCell align="left">Worth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.people.map((person) => (
            <StyledTableRow key={person.rank}>
              <TableCell component="th" scope="row">
                {person.rank}
              </TableCell>
              <TableCell align="left">{person.personName}</TableCell>
              <TableCell align="left">{person.source}</TableCell>
              <TableCell align="left">{person.industries[0]}</TableCell>
              <TableCell align="left">${person.finalWorth}B</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
