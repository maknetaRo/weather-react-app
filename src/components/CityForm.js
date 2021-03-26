import React from "react";
import StyledForm from "./modules/StyledForm";

const CityForm = ({ onSubmit, onChange, value }) => {
  return (
    <StyledForm
      city="City"
      submit="Submit"
      onSubmit={onSubmit}
      onChange={onChange}
      value={value}
    />
  );
};

export default CityForm;
