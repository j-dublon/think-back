import { useContext } from "react";
import DataContext from "./DataContext";

const useData = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("Data hook must be used within a data provider");
  }
  return context;
};

export default useData;
