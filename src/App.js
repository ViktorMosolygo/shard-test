import React from "react";
import styled from "styled-components";
import { FormProvider, FormContext } from "./context/FormContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import SuccessMessage from "./components/SuccessMessage";
import CardsSection from "./components/CardsSection";



const SectionContainer = styled.div`
  max-width: 1240px;
  height: 100vh;
    margin: 0 auto;
  display: flex;
    justify-content: center; /* Horizontálisan középre helyezés */
    align-items: center;

      @media (max-width: 950px) {
    height: auto; 
    padding: 20px 0;
  }
`;

const ContentWrapper = styled.div`


`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
margin-top: 2rem;
text-align: center;
padding: 0 24px;
`;

const HeaderText = styled.h2`
    padding-top: 2rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1px;
`;

const HeadLine = styled.h1`
    
    font-family: "DM Serif Display", serif;
    font-style: normal;
    line-height: 1;
    font-size: 3.8rem;
    padding: 0px 0px 24px;

      @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const ParagraphText = styled.p`
    margin: 0px;
    font-size: 1rem;
    font-family: "DM Sans", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
`;

const CallText = styled.a`
    font-size: 1rem;
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 1.5;
`;

const ContactText = styled.p`
    margin: 4px 0px 0px;
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    font-size: 0.85rem;
    color: gray;
`;


const App = () => {


  return (
<>
   
    <FormProvider>
      <Header />
      <SectionContainer>

      <ContentWrapper>

      <TextWrapper>
      <HeaderText>contact us</HeaderText>
      <HeadLine>Your Dream home is waiting</HeadLine>
        <ParagraphText>
        Ready for your second home? Call us at <CallText>+971 58 597 0335</CallText> to get started or fill out the form and we will contact you shortly.
        </ParagraphText>
      </TextWrapper>     
        <StepRouter /> 
      <ContactText>Shard Property Management LLC</ContactText>
      <ContactText>Reg. no.: 1350817</ContactText>
      <ContactText>Dubai, UAE</ContactText>
      </ContentWrapper>

      </SectionContainer>
      <CardsSection />

      <Footer />
      
    </FormProvider>
    </>
  );
};

const StepRouter = () => {
  const { step, submitted } = React.useContext(FormContext);

  if (submitted) {
    return <SuccessMessage />;
  }

  return step === 1 ? <StepOne /> : <StepTwo />;
};

export default App;
