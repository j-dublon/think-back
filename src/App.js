import "./App.css";
import NavBar from "./components/navigation/NavBar";
import EndView from "./components/screens/EndView";

function App() {
  return (
    <body>
      <header className="header">
        <h1 className="header__title">Think Back</h1>
        <NavBar />
      </header>
      <EndView />
    </body>
  );
}

export default App;
