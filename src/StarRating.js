import React from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const starStyle = {
  color: "yellow",
  fontSize: "4px",
};

const textStyle = {
  lineHeight: "0",
  margin: "0",
};

function StarRating({ max = 5 }) {
  return (
    <div style={containerStyle}>
      <div className={starStyle}>
        {Array.from({ length: max }, (_, i) => (
          <span key={i}>
            <i className="fa fa-star">{`Star${i + 1} `}</i>
          </span>
        ))}
      </div>
      <p style={textStyle}>{max}</p>
    </div>
  );
}

export default StarRating;
