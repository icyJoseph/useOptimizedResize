import React from "react";
import ReactDOM from "react-dom";

import useOptimizedResize from "../../src";
import "./index.css";

const logger = a => console.log(a);
const loggers = [logger, logger];

function ResizeOptimized() {
  const [width, height] = useOptimizedResize(...loggers);
  return (
    <div className="hook">
      <div className="optimized-resize">
        <span className="text-muted">
          Width: <span className="text-success">{width}</span> px
        </span>
        <span className="text-muted">
          Height: <span className="text-danger">{height}</span> px
        </span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <section>
        <header>
          <h1>
            <code>useOptimizedResize</code>
          </h1>
        </header>
        <div className="container with-flex-wrap">
          <ResizeOptimized />
        </div>
      </section>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
