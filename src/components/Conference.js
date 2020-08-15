import React from "react";
import { Typography, Card, makeStyles, CardContent } from "@material-ui/core";

const useConferenceStyles = makeStyles((theme) => ({
  container: {
    margin: "10px",
    border: "1px solid black",
    width: "320px",
    height: "390px",
  },
  image: {
    textAlign: "center",
    height: "180px",
    width: "200px",
  },
  text: {
    margin: "6px",
  },
  title: {
    margin: "6px",
    fontWeight: "bold",
    fontSize: "15px",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function Conference({ conference }) {
  const classes = useConferenceStyles();

  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography className={classes.title} variant="subtitle1">
          {conference.confName}
        </Typography>
        <img
          alt="conference"
          src={conference.imageURL}
          className={classes.image}
        />
        <Typography className={classes.text} variant="body2">
          Entry Type : {conference.entryType}
        </Typography>
        <Typography className={classes.text} variant="body1">
          Place: {conference.country}
        </Typography>
        <Typography className={classes.text} variant="body2">
          <a className={classes.link} href={`${conference.confUrl}`}>
            Conference Link
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
}
