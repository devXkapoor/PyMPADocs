import React from "react";
import StepMainHeading from "./StepMainHeading";
import StepMainContent from "./StepMainContent";

const StepMain = () => {
  return (
    <>
      <div className="StepMain">
        <StepMainHeading Heading={"Heading"}/>
        <StepMainContent Content={"Content"}/>
      </div>
    </>
  );
};

export default StepMain;
