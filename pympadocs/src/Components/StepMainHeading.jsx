import React from "react";
import AutoResizeTextarea from "./ui/AutoResizeTextarea";

const StepMainHeading = ({
  Heading,
  Mode,
  setMode,
  NSteps,
  setNSteps,
  ActiveStep,
  setActiveStep,
}) => {
  return (
    <>
      <div className="StepMainHeading">
        {Mode === "Edit" ? (
          <>
            {/* <textarea id="HeadingTextArea" type="text" /> */}
            <AutoResizeTextarea id="HeadingTextArea" />
          </>
        ) : (
          `${Heading}`
        )}
      </div>
    </>
  );
};

export default StepMainHeading;
