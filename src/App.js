import "./App.css";
import NavBar from "./components/navigation/NavBar";
import TaskView from "./components/screens/TaskView";

function App() {
  return (
    <body>
      <header className="header">
        <h1 className="header__title">Think Back</h1>
        <NavBar />
      </header>
      <TaskView />
    </body>
  );
}

export default App;
