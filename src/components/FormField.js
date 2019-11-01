import React from "react";

const FormField = ({ label, children }) => {
  return (
    <label
      css={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 18,
        fontSize: "1.2rem",
      }}
    >
      <p css={{ margin: 0, padding: 0, textAlign: "right" }}>{label}</p>
      {children}
    </label>
  );
};

export default FormField;
