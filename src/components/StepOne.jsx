import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";
import InputField from "./InputField";
import Button from "./Button";

const FormWrapper = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;





const StepOne = () => {
    const { formData, setFormData, setStep } = useContext(FormContext);
    const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;


    if (!formData.firstName) {
      tempErrors.firstName = "Please enter your first name.";
      isValid = false;
    }

    
    if (!formData.lastName) {
      tempErrors.lastName = "Please enter your last name";
      isValid = false;
    }


    setErrors(tempErrors);
    return isValid;
  };

  const handleNext = () => {
    if (handleValidation()) {
        setStep(2);
    }
  };


 

  return (
    <FormWrapper>
      <h2 style={{ fontWeight: "400", paddingBottom: "2rem"}}>Step 1: Enter Your Name</h2>

      <InputField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required={true}
      />
      {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}

      <InputField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required={true}
      />
       {errors.lastName && <p style={{ color: "red" }}>{errors.firstName}</p>}

       <Button
        label="Next"
        onClick={handleNext}
        bgColor="rgb(0, 132, 132);"
        hoverColor="rgb(15, 88, 90);"
      />
    </FormWrapper>
  )
}

export default StepOne