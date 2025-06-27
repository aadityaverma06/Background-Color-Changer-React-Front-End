import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("purple");

  return (
    <div
      className="h-screen duration-200 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-3 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-red-600"
            onClick={() => {
              setColor("#e53935");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-green-600"
            onClick={() => {
              setColor("#16a34a");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-blue-600"
            onClick={() => {
              setColor("#2563eb");
            }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
