import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
const Dashboard = ({
  Mode,
  setMode,
  NSteps,
  setNSteps,
  ActiveStep,
  setActiveStep,
}) => {
  return (
    <>
      <div className="Dashboard">
        <Sidebar
          Mode={Mode}
          setMode={setMode}
          NSteps={NSteps}
          setNSteps={setNSteps}
          ActiveStep={ActiveStep}
          setActiveStep={setActiveStep}
        />
        <Main
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
};

export default Dashboard;
