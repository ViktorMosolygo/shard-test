import React from "react";
import styled from "styled-components";


const InputWrapper = styled.div`
  position: relative;
  margin: 20px 0;
  width: 100%;
 
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 5px;
  font-size: 16px;
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  transition: border-bottom 0.3s ease;
 text-align: center;

  &:focus {
    border-bottom: 2px solid rgb(0, 132, 132);
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0;
    left: 35%;
     font-size: 1.2em;
    color: rgb(0, 132, 132);
  }
`;

const Label = styled.label`
  position: absolute;
top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.5em;
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4375em;
  pointer-events: none;
  transition: all 0.3s ease;

  &span {
    font-size: 14px;
    color: red;
    margin-left: 2px;
    vertical-align: super; 
  }

`;




const InputField = ({ label, required, type = "text", name, value, onChange }) => (
  <InputWrapper>
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder=" "
    />
    <Label>
      {label}
      {required && <span>*</span>}</Label>
  </InputWrapper>
);

export default InputField;
