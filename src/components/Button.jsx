import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  margin-top: 20px;
  font-family: "DM Sans", sans-serif;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: .05rem;
  min-width: 64px;
  padding: 6px 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  transition: .3s ease-in-out 0s;

  &:hover {
    background-color: ${(props) =>
      props.hoverColor};
      transform: scale(1.05);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Button = ({ label, bgColor, textColor, hoverColor, onClick, disabled }) => {
  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      hoverColor={hoverColor}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
