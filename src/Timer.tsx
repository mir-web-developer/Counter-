import React, { useState } from "react";
import { Buttons } from "./Buttons";
import { Display } from "./Display";

type TimerNumber = {
  number: number;
};
export const Timer = () => {
  const [number, setNumber] = useState<TimerNumber>(0);

  const incCallback = () => {
    
      setNumber(number + 1)
    
  };

  const resetCallback = () => {
    setNumber(0);
  };
  return (
    <>
      <div className="container">
        <Display number={number} />
        <Buttons
        number={number}
          incCallback={incCallback}
          resetCallback={resetCallback}
        />
      </div>
    </>
  );
};
