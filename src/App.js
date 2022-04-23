import "./App.css";
import ironman from "./download.jpg";
import { useState } from "react";
import hulk from "./Hulk_(circa_2019).png";

let descriptions = {
  ironman: "ironman is great, i love him",
  hulk: "hulk is strong",
};

function App() {
  const [state, setState] = useState({ focused: undefined });
  return (
    <div>
      <img
        onClick={() => {
          setState({ focused: "ironman" });
        }}
        src={ironman}
      />
      <img
        onClick={() => {
          setState({ focused: "hulk" });
        }}
        src={hulk}
      />

      {state.focused && (
        <div
          style={{
            position: "fixed",
            left: "0px",
            top: "0px",
            right: "0px",
            bottom: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={() => {
              setState({ focused: undefined });
            }}
            style={{
              padding: "50px",
              boxShadow:
                "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            }}
          >
            {descriptions[state.focused]}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
