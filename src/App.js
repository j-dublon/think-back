import "./App.css";
import NavBar from "./components/navigation/NavBar";
import WelcomeView from "./components/screens/WelcomeView";

function App() {
  return (
    <body>
      <header className="header">
        <h1 className="header__title">Think Back</h1>
        <NavBar />
      </header>
      <WelcomeView />
    </body>
  );
}

export default App;
