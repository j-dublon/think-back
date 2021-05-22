import React, { useState } from "react";
import DataContext from "./DataContext";

export default function DataProvider(props) {
  const [userName, setUserName] = useState("");

  const [currentPage, setCurrentPage] = useState("home");

  // ** ** ** ** ** Memoize ** ** ** ** **
  const values = React.useMemo(
    () => ({
      userName,
      setUserName,
      currentPage,
      setCurrentPage,
    }),
    [userName, setUserName, currentPage, setCurrentPage]
  );

  // ** ** ** ** ** Return ** ** ** ** **
  return (
    <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
  );
}
