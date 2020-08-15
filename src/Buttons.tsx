import React from "react";

type ButtonsPropsTypes = {
  incCallback: () => void;
  resetCallback: () => void;
  number: number;
};

export const Buttons: React.FC<ButtonsPropsTypes> = ({
  incCallback,
  resetCallback,
  number
}) => {
  return (
    <>
      <div className="buttons">
        <button
          className={number >= 5 ? "inc-button disabled" : "inc-button"}
          disabled={number >= 5 ? true : false}
          onClick={incCallback}
        >
          inc
        </button>
        <button className={number === 0 ? "reset-button disabled" : "reset-button"} disabled={number === 0 ? true : false} onClick={resetCallback}>
          reset
        </button>
      </div>
    </>
  );
};
