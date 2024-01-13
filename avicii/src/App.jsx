import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 41 18.9"
        width="41"
        height="19"
        aria-hidden="true"
        data-darkreader-inline-fill=""
      >
        <path d="M22.1 18.9V0H41L22.1 18.9zM18.9 0v18.9H0L18.9 0z"></path>
      </svg>
    </>
  );
}

export default App;
