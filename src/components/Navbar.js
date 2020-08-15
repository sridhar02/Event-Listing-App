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
    // border: "1px solid white",
    marginLeft: "45px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    maxWidth: "420px",
    width: "420px",
  },
}));

export default function Navbar() {
  const classes = useNavbarStyles();
  return (
    <div className={classes.container}>
      <AppBar className={classes.container}>
        <Toolbar>
          <Typography variant="h6">KonfHub Dashboard</Typography>
          <TextField
            variant="outlined"
            placeholder="search by name or city"
            className={classes.textfield}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
