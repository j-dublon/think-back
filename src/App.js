import "./App.css";
import DataProvider from "./data/DataProvider";
import AppContainer from "./AppContainer";

function App() {
  return (
    <DataProvider>
      <AppContainer />
    </DataProvider>
  );
}

export default App;
