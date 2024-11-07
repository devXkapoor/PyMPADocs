import React from "react";

const StepSidebar = ({ StepNumber, Mode, setMode }) => {
  return (
    <>
      <div
        className="StepSidebar"
        onClick={() => {
          console.log("Hiiii");
        }}
      >
        Step {StepNumber}
      </div>
    </>
  );
};

export default StepSidebar;
