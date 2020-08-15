import React from "react";

type DisplayPropsTypes = {
  number: number;
};
export const Display: React.FC<DisplayPropsTypes> = ({ number }) => {
  return (
    <>
      <div className={number >= 5 ? "more-than-5 num" : "num"}>{number}</div>
    </>
  );
};
