import React from "react";
import {
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
  TextField,
} from "@material-ui/core";

const useNavbarStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "20px",
  },
  textfield: {
    marginLeft: "45px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    maxWidth: "420px",
    width: "420px",
  },
  appbar: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Navbar({ searchValue, setSearchValue }) {
  const classes = useNavbarStyles();

  return (
    <div className={classes.container}>
      <AppBar className={classes.container}>
        <Toolbar>
          <Typography variant="h6">KonfHub Dashboard</Typography>
          <TextField
            value={searchValue}
            variant="outlined"
            placeholder="search by name or city"
            className={classes.textfield}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
