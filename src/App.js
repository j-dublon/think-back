import "./App.css";
import NavBar from "./components/navigation/NavBar";
import IntroView from "./components/screens/IntroView";

function App() {
  return (
    <body>
      <header className="header">
        <h1 className="header__title">Think Back</h1>
        <NavBar />
      </header>
      <IntroView />
    </body>
  );
}

export default App;
