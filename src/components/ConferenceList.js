import axios from "axios";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

import Conference from "./Conference.js";

const useConferenceList = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#303f9f",
  },
}));

export default function ConferenceList() {
  const classes = useConferenceList();
  const [conferencesList, setConferencesList] = useState("");

  const fetchConferences = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}`);
      setConferencesList(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchConferences();
  }, []);
  return (
    <div className={classes.container}>
      {conferencesList &&
        conferencesList.paid.map((conference, index) => (
          <Conference conference={conference} key={index} />
        ))}
      {conferencesList &&
        conferencesList.free.map((conference, index) => (
          <Conference conference={conference} key={index} />
        ))}
    </div>
  );
}
