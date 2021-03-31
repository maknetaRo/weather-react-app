import React from "react";
import StyledForm from "./modules/StyledForm";

const CityForm = ({ onSubmit, onChange, value, placeholder }) => {
  return (
    <StyledForm
      city="City"
      submit="Submit"
      onSubmit={onSubmit}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default CityForm;
