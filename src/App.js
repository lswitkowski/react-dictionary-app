import './App.css';
import Dictionary from "./Dictionary.js"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header>
        <Dictionary/>
      </header>
      <footer>
        This website was coded by{" "}
        <a
          href="https://github.com/lswitkowski/"
          target="_blank"
          rel="noreferrer"
        >
          Lisa W
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/lswitkowski?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , and hosted on{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noreferrer"
          title="netlify"
        >
          Netlify
        </a>
      </footer>
    </div></div>
  );
}

export default App;
