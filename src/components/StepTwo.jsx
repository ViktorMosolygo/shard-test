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


const ButtonWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;

`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input {
    margin-right: 10px;
  }
    & a {
    color: black;
    }
`;

const StepTwo = () => {
  const { formData, setFormData, setStep, handleSubmit } = useContext(FormContext);
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;


    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    const phoneRegex = /^(?:\+36|06)\d{9}$|^(?:\+971)\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number (Hungary or UAE).";
      isValid = false;
    }

    if (!termsAccepted) {
      tempErrors.terms = "You must accept the terms and conditions.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleNext = () => {
    if (handleValidation()) {
      handleSubmit();
    }
  };

  return (
    <FormWrapper>
      <h2 style={{ fontWeight: "400", paddingBottom: "2rem"}}>Step 2: Enter Contact Details</h2>
      <InputField
        label="E-mail"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required={true}
      />

      {errors.email && <p style={{ color: "red",  }}>{errors.email}</p>}

      <InputField
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required={true}
      />
      {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        <a href="/#">I accept the Terms and Conditions and Privacy Policy</a>
      </CheckboxLabel>
      {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}

    <ButtonWrapper>
    <Button
        label="Back"
        onClick={() => setStep(1)}
        bgColor="black"
        textColor="#000"
      />
      <Button
        label="Call me back"
        onClick={handleNext}
        bgColor="rgb(0, 132, 132);"
        hoverColor="rgb(15, 88, 90);"
        >
       
      </Button>
    </ButtonWrapper>

    </FormWrapper>
  );
};

export default StepTwo;
