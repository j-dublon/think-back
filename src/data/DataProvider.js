import React, { useState, useMemo } from "react";
import DataContext from "./DataContext";

export default function DataProvider(props) {
  const [userName, setUserName] = useState("");

  const [currentPage, setCurrentPage] = useState("home");

  const sequence = useMemo(
    () => [
      "A",
      "D",
      "A",
      "F",
      "L",
      "X",
      "F",
      "X",
      "T",
      "S",
      "U",
      "S",
      "P",
      "D",
      "E",
      "D",
      "O",
      "L",
      "D",
      "P",
    ],
    []
  );

  const [expectedMatches, setExpectedMatches] = useState(0);
  const [falseAlarms, setFalseAlarms] = useState(0);
  const [misses, setMisses] = useState(0);
  const [matches, setMatches] = useState(0);

  // ** ** ** ** ** Memoize ** ** ** ** **
  const values = useMemo(
    () => ({
      userName,
      setUserName,
      currentPage,
      setCurrentPage,
      sequence,
      falseAlarms,
      setFalseAlarms,
      misses,
      setMisses,
      matches,
      setMatches,
      expectedMatches,
      setExpectedMatches,
    }),
    [
      userName,
      setUserName,
      currentPage,
      setCurrentPage,
      sequence,
      falseAlarms,
      setFalseAlarms,
      misses,
      setMisses,
      matches,
      setMatches,
      expectedMatches,
      setExpectedMatches,
    ]
  );

  // ** ** ** ** ** Return ** ** ** ** **
  return (
    <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
  );
}
