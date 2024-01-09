import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://entry-level-web-developer-cv.netlify.app/"
            target="_blank"
          >
            {" "}
            Anna N. Tymoshenko{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AnnaNatali/weather-app-react"
            target="_blank"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
