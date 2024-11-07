import React from "react";
import StepMain from "./StepMain";

const MainContent = ({
  Mode,
  setMode,
  NSteps,
  setNSteps,
  ActiveStep,
  setActiveStep,
}) => {
  return (
    <>
      <div className="Main">
        <StepMain
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

export default MainContent;
