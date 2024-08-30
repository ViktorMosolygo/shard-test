import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, step, setStep, submitted, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
};
