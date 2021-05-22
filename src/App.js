import "./App.css";
import NavBar from "./components/navigation/NavBar";
import WelcomeView from "./components/screens/WelcomeView";
import IntroView from "./components/screens/IntroView";
import TaskView from "./components/screens/TaskView";
import EndView from "./components/screens/EndView";
import { Router } from "@reach/router";
import DataProvider from "./data/DataProvider";

function App() {
  return (
    <DataProvider>
      <body>
        <header className="header">
          <h1 className="header__title">Think Back</h1>
          <NavBar />
        </header>

        <Router primary={false}>
          <WelcomeView path="/" />
          <IntroView path="/intro" />
          <TaskView path="/task" />
          <EndView path="/end" />
        </Router>

        <footer className="footer">
          <p className="footer__text">© 2021 Think Back</p>
        </footer>
      </body>
    </DataProvider>
  );
}

export default App;
