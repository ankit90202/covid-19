import React from "react";

const Title = ({ title, colSize }) => {
  const style = {
    padding: "30px 0",
  };

  return (
    <div className={`col-${colSize}`}>
      <h3 style={style}>{title}</h3>
    </div>
  );
};

export default Title;
