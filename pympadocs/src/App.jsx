import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import { useState } from "react";

function App() {
  const [Mode, setMode] = useState("Static");
  const [NSteps, setNSteps] = useState(0);
  const [ActiveStep, setActiveStep] = useState(0);

  return (
    <>
      <div className="App">
        <Navbar
          Mode={Mode}
          setMode={setMode}
          NSteps={NSteps}
          setNSteps={setNSteps}
          ActiveStep={ActiveStep}
          setActiveStep={setActiveStep}
        />
        <Dashboard
          Mode={Mode}
          setMode={setMode}
          NSteps={NSteps}
          setNSteps={setNSteps}
          ActiveStep={ActiveStep}
          setActiveStep={setActiveStep}
        />
      </div>
    </>
  );
}

export default App;
