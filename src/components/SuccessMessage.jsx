import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;

   & h2 {
    font-size: 2rem;
    font-weight: 400;
    color: rgb(0, 132, 132);
    line-height: 2.3rem;
  }
  & p {
    font-size: 1.3rem;
    line-height: 2.3rem;
  }

`;

const SuccessMessage = () => {
  return (
    <FormWrapper>
      <h2>Registration was successful!</h2>
      <p>Thank you for registering.</p>
    </FormWrapper>
  );
};

export default SuccessMessage;
