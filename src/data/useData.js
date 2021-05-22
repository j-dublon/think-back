import React, { useContext } from "react";
import DataContext from "./DataContext";

export default () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("Data hook must be used within a data provider");
  }
  return context;
};
