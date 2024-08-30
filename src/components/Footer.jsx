import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import whiteShardLogo from '../images/white_shard_logo.svg';


const FooterContainer = styled.footer`
  background-color: rgb(15, 88, 90);
  color: #fff;
  padding: 70px 0;
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  max-width: 1240px;
  padding: 0 32px;
  width: 100%;

   @media (max-width: 999px) {
   display: flex;
   flex-direction: column;
   align-items: center;
}
`;


const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: 1;
  grid-row: 1;

  img {
    height: 42px;
    margin-bottom: 20px;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.6;
    font-wight: 300;
    margin-top: 10px;
  }

   @media (max-width: 999px) {
   display: flex;
   align-items: center;
  
}

`;

const TextRights = styled.div`
 grid-column: 1;
  grid-row: 2;
  font-size: 0.8rem;
  line-height: 1.5;

  @media (max-width: 999px) {
    text-align: center;
  }

`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
   grid-column: 2;
   grid-row: 1;

h4 {
font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
font-size: 0.75rem;
padding-bottom: 0.5em;
}

  p {
font-weight: 700;
    font-size: 1.1rem;
  }


`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
   align-items: end;
  grid-column: 3;
  grid-row: 1;

   @media (max-width: 999px) {
   display: flex;
   align-items: center;
      padding: 40px 0;
}

`;

const FooterNavs = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;
 padding-top: 16px;
 padding: 10px 0;
 flex-wrap: wrap;
 

  a {
    color: #fff;
    padding: 5px 0;
    font-weight: 300;
    display: inline-block;
    font-size: 0.9rem;
    margin: 0 16px;
    text-decoration: underline;

    }
  }

`;

const PrivacyPolicy = styled.div`
display: flex;
 flex-direction: column;
 padding: 10px 0;
 

 a {
     text-decoration-line: none;
     color: white;
     font-size: 0.7rem;
     padding: 0.3em 0;
 }


`;

const SocialMediaSection = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  svg {
    margin: 0 10px;
    width: 0.7em;
    cursor: pointer;
    color: #fff;
    }
  }
`;


const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>

        <LogoSection>
          <img src={whiteShardLogo} alt="Shard Logo" />          
        </LogoSection>

        <ContactSection>
          <h4>
            contact us
          </h4>
        <p>
        +971 58 597 0335
          </p>
        </ContactSection>

        <LinksSection>
          <FooterNavs>
          <a href="/#">Learn</a>
          <a href="/#">Properties</a>
          <a href="/#">Blog</a>
          <a href="/#">For Agents</a>
          <a href="/#">About us</a>
         </FooterNavs>

         <PrivacyPolicy>
         <a href="/#">Privacy Policy</a>
         <a href="/#">Terms of use</a>
         </PrivacyPolicy>

        <SocialMediaSection>
          <div>
            <Facebook fontSize="large" />
            <Twitter fontSize="large" />
            <Instagram fontSize="large" />
            <LinkedIn fontSize="large" />
          </div>
        </SocialMediaSection>
        </LinksSection>
        <TextRights>
          <p>
          © Shard Property Management LLC <br />
          Reg. no.: 1350817 <br />
          All rights reserved <br />
          2023-2024<br />
          </p>
          </TextRights>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
