import React from "react";
import StepMainHeading from "./StepMainHeading";
import StepMainContent from "./StepMainContent";

const StepMain = ({
  Mode,
  setMode,
  NSteps,
  setNSteps,
  ActiveStep,
  setActiveStep,
}) => {
  return (
    <>
      <div className="StepMain">
        <StepMainHeading
          Mode={Mode}
          setMode={setMode}
          NSteps={NSteps}
          setNSteps={setNSteps}
          ActiveStep={ActiveStep}
          setActiveStep={setActiveStep}
          Heading={"Heading"}
        />
        <StepMainContent
          Mode={Mode}
          setMode={setMode}
          NSteps={NSteps}
          setNSteps={setNSteps}
          ActiveStep={ActiveStep}
          setActiveStep={setActiveStep}
          Content={"Content"}
        />
      </div>
    </>
  );
};

export default StepMain;
