import axios from "axios";
import React, { useEffect, useState } from "react";
import matchSorter from "match-sorter";
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

export default function ConferenceList({ searchValue }) {
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

  const allConferencesList =
    conferencesList && conferencesList.paid.concat(conferencesList.free);

  const filteredList = matchSorter(allConferencesList, searchValue, {
    keys: ["confName", "country"],
  });

  return (
    <div className={classes.container}>
      {conferencesList &&
        filteredList.map((conference, index) => (
          <Conference conference={conference} key={index} />
        ))}
    </div>
  );
}
