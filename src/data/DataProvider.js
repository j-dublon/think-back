import React, { useState } from "react";
import DataContext from "./DataContext";

export default function DataProvider(props) {
  const [userName, setUserName] = useState("Jodi");

  // ** ** ** ** ** Memoize ** ** ** ** **
  const values = React.useMemo(
    () => ({
      userName,
      setUserName,
    }),
    [userName, setUserName]
  );

  // ** ** ** ** ** Return ** ** ** ** **
  return (
    <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
  );
}
