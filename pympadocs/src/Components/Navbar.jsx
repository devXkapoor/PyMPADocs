import React, { useState } from "react";

const Navbar = () => {
  const [NSteps, setNSteps] = useState(0);

  const AddAStep = async () => {
    // const data = await fetch("http://localhost:3000/api/addStep", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const x = await data.json();

    // if (x.ok)
    //   setNSteps((prevState) => {
    //     prevState + 1;
    //   });

    setNSteps(NSteps + 1);
    console.log(NSteps)
  };

  return (
    <>
      <div className="Navbar">
        <div>PyMPA - Python Matching Phase Algorithm</div>
        <div>
          <button onClick={AddAStep}>Add a Step</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
