import React from "react";

const StepSidebar = ({ StepNumber }) => {
  return (
    <>
      <div
        className="StepSidebar"
        onClick={() => {
          console.log("Hiiii");
        }}
      >
        {StepNumber}
      </div>
    </>
  );
};

export default StepSidebar;
