import React from "react";
import StepSidebar from "./StepSidebar";

const Sidebar = ({
  Mode,
  setMode,
  NSteps,
  setNSteps,
  ActiveStep,
  setActiveStep,
}) => {
  return (
    <>
      <div className="Sidebar">
        {Array.from({ length: NSteps }).map((_, i) => (
          <React.Fragment key={`step-sidebar-${NSteps}-${i}`}>
            <StepSidebar Mode={Mode} setMode={setMode} StepNumber={i+1} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
