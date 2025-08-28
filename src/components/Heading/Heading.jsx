import React from "react";

export const Heading = (props) => {
  return (
    <>
      <div className="w-fit mx-auto">
        <h3 className="md:text-5xl text-[2.5rem] font-bold">
          <span className="text-orange-500">{props.highlight}</span>{props.heading}
        </h3>

        <div className="w-34   h-1 bg-orange-300 mt-5 me-2 mb-5 ml-auto"></div>
      </div>
    </>
  );
};
