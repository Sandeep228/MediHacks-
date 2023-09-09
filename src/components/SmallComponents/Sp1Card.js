import React from "react";

function Sp1Card({title, desc}) {
  return (
    <div
      className="sp1-card"
      style={{
        width: "300px",
        textAlign: "center",
        background: "linear-gradient(90deg, rgba(87,241,198,1) 50%, rgba(152,237,192,1) 100%)",
        borderRadius: "10px",
        padding: "20px 25px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 20px 10px",
        margin: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {title}
      </h1>
      <p style={{ textAlign: "justify" }}>
        {desc}
      </p>
    </div>
  );
}

export default Sp1Card;