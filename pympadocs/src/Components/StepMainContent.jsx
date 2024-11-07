import React from "react";
import AutoResizeTextarea from "./ui/AutoResizeTextarea";

const StepMainContent = ({
  Content,
  Mode,
  setMode,
  NSteps,
  setNSteps,
  ActiveStep,
  setActiveStep,
}) => {
  return (
    <div className="StepMainContent">
      {Mode === "Edit" ? (
        <AutoResizeTextarea className="ContentTextArea" />
      ) : (
        "Content"
      )}
    </div>
  );
};

export default StepMainContent;
