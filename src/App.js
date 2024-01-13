import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://entry-level-web-developer-cv.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Anna N. Tymoshenko{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AnnaNatali/weather-app-react"
            target="_blank"
            rel="noreferrer"
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
