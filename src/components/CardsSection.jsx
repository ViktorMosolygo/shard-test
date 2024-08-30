import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import svgCardBgWhite from '../images/card_blue_bg.svg';
import svgCardBgBlue from '../images/card_white_bg.svg';

const CardsSection = () => {

  const isMdUp = useMediaQuery('(min-width:400px)');
  const isXsUp = useMediaQuery('(min-width:400px)');

  return (
    <div className='gridContainer'>
      <Grid container
        sx={{
          boxSizing: 'border-box',
          display: 'flex',
          flexFlow: 'wrap',
          width: '100%',
          marginBottom: '100px',
          paddingTop: isXsUp ? '0'  : '100px' ,
        }}
      >

      
        <Grid item xs={12} sm={6} order={{ md: 0, lg: 0 }}>
          <Box sx={{
                 maxWidth: {
                  xs: '420px',
                  sm: '360px', 
                },

                width: '100%',
                marginRight: {
                  xs: 'auto',
                  sm: '0px',
                },

            marginLeft: 'auto',
            transform: 'rotateY(180deg) rotateX(180deg)',
            
          }
          }>         
            <div className="svgCard white ">       
              <div className="contentContainer">    
        
                <div className="cardRowOne">
                  <div className="cardRowContentContainer">
                    <div className="MuiGrid-root expandCardButton">
                      <AddCircleOutlineOutlinedIcon
                      style={{
                        color: 'white',
                        fontSize: 45,
                        marginLeft: isMdUp ? 300 : 260,
                        marginBottom: 85}} />
                    </div>
                  </div>
                </div> 

                <div className="cardRowThree">
                  <div className="cardRowContentContainer MuiBox-root">
                    <Typography variant='body1' component="div" sx={{
                      margin: '0px',
                      color: 'white',
                      lineHeight: '1.2',
                      fontWeight: '500',
                      textAlign: 'left',
                      fontSize: '6rem',
                      fontFamily: '"DM Serif Display", serif',
                      fontStyle: 'italic',  
                      transform: 'rotateY(180deg) rotateX(180deg)',
                    }}>44</Typography>
                  </div>
                </div>

                <div className="cardRowTwo">
                  <div className="cardRowContentContainer">
                    <Typography variant='body1' component="div" sx={{
                      margin: '0px',
                      color: 'white',
                      lineHeight: '1.2',
                      fontWeight: '500',
                      paddingTop: '20px',
                      textAlign: 'left',
                      fontSize: '2.2rem',
                      transform: 'rotateX(180deg) rotateY(180deg)',
                    }}>How many <br/>days can I use<br/> the home?</Typography>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        

        
        <Grid item xs={12} sm={6} order={{ xs: 3, sm: 0, md: 0, lg: 0 }}>
          <Box sx={{
            maxWidth: {
              xs: '420px', 
              sm: '360px', 
            },
            width: '100%',
            marginRight: {
              xs: 'auto',
              sm: '0px',
            },
            marginLeft: {
              xs: 'auto',
              sm: '0px !important',
            },
            marginTop: {
              xl: '240px',
              lg: '290px',
              md: '-125px', 
              sm: '70%',  
              xs: '180px'   
            },
            transform: 'none'        
          }
          }>
            <div className="svgCard blue marginTopMinusThirtyFive">
              <div className="contentContainer">

              <div className="cardRowTwo">
                  <Box className="cardRowContentContainer" sx={{
                    
                  }}>
                    <Typography variant='body1' component="div" sx={{
                      margin: '0px',
                      color: '#000',
                      lineHeight: '1.2',
                      fontWeight: '500',
                      textAlign: 'left',
                      fontSize: '2.2rem',
                     
                    }}>Do I really own <br/>the property?</Typography>
                  </Box>
                </div>
              
                <div className="cardRowThree">
                  <Box className="cardRowContentContainer" sx={{
                 
                  }}>
                    <Typography variant='body1' component="div" sx={{
                      margin: '0px auto 0px 0px',
                      color: '#000',
                      lineHeight: '1.2',
                      fontWeight: '500',
                      textAlign: 'left',
                      fontSize: '6rem',
                      fontFamily: '"DM Serif Display", serif',
                      fontStyle: 'italic',
                      
                    }}>Yes</Typography>
                  </Box>
                </div>
  
                <div className="cardRowOne">
                  <div className="cardRowContentContainer">
                    <div className="MuiGrid-root expandCardButton" style={{textAlign: 'left'}}>
                      <AddCircleOutlineOutlinedIcon
                      style={{
                        color: 'gray',
                        fontSize: 45,
                        marginLeft: isMdUp ? -15 : -13, marginTop: isMdUp ? 85 : 140}} />
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        

        
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2, md: 2, lg: 1 }}>
          <Box sx={{
                 maxWidth: {
                  xs: '420px', 
                  sm: '360px', 
                },
                width: '100%',
                marginRight: {
                  xs: 'auto',
                  sm: '0px',
                },
            marginLeft: 'auto',
            transform: 'rotateY(180deg) rotateX(180deg)',
            marginTop: {
              xl: '-240px',
              md: '-290px', 
              sm: '-60%',  
              xs: '30px'   
            },
          }
          }>
            <div className="svgCard blue marginTopMinusThirtyFive">
              <div className="contentContainer">
                <div className="cardRowThree">
                  <div className="cardRowContentContainer MuiBox-root">
                    <Typography variant='body1' component="div" sx={{
                      margin: '0px auto 0px 0px',
                      color: '#000',
                      lineHeight: '1.2',
                      textAlign: 'right',
                      fontWeight: '500',
                      fontSize: '6rem',
                      fontFamily: '"DM Serif Display", serif',
                      fontStyle: 'italic',
                      transform: 'rotateY(180deg) rotateX(180deg)'
                    }}>Yes</Typography>
                  </div>
                </div>
                <div className="cardRowTwo">
                  <div className="cardRowContentContainer">
                    <Typography variant='body1' component="div" sx={{
                      margin: '0px',
                      color: '#000',
                      lineHeight: '1.2',
                      fontWeight: '500',
                      textAlign: 'right',
                      fontSize: '2.2rem',
                      transform: 'rotateY(180deg) rotateX(180deg)'
                    }}>Can I sell my share?</Typography>
                  </div>
                </div>

                <div className="cardRowOne">
                  <div className="cardRowContentContainer">
                    <div className="MuiGrid-root expandCardButton" style={{textAlign: 'left'}}>
                      <AddCircleOutlineOutlinedIcon
                      style={{
                        color: 'gray',
                        fontSize: 45,
                        marginLeft: isMdUp ? -15 : -15 ,
                        marginTop: isMdUp ? 90 : 140 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    
      <style>
        {`
        .marginTopMinusThirtyFive {
          margin-top: -35%;
        }
        .MuiGrid-item {padding-left:24px;}
        .gridContainer {
          border: none;
          margin: auto;
          max-width: 1240px;
          padding: 0 32px;
        }
        .white {background-image: url(${svgCardBgWhite});}
        .blue {background-image: url(${svgCardBgBlue});}
        .svgCard {
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: contain;
          -webkit-filter: drop-shadow(0 4px 20px rgba(0, 0, 0, .26));
          filter: drop-shadow(0 4px 20px rgba(0, 0, 0, .26));
          padding-bottom: 160%;
          position: relative;
          width: 100%;
        }
        .contentContainer {
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
        .cardRowOne {
          height: 29%;
          width: 30%;
        }
        .cardRowTwo {
          height: 46%;
        }

        .cardRowWidth {
          width: 80%;
        }
        .cardRowThree {
          height: 25%;
        }
        .white>* .cardRowThree>.cardRowContentContainer {
          padding-top: 32px;
        }

        .white>* .cardRowContentContainer {
          display: flex;
          height: -webkit-fill-available;
        }
        .cardRowContentContainer {
          padding: 18px;
        }
        .white>* .cardRowTwo>.cardRowContentContainer {
          align-items: end;
          display: flex;
          height: -webkit-fill-available;
          justify-content: end;
          padding-bottom: 0;
        }
        .white>* .cardRowContentContainer>.expandCardButton {
          margin-left: -7px;
          margin-top: auto;
        }

        @media (max-width: 1199px) and (min-width: 900px) {
          .gridContainer {
            max-width: 1200px;
            padding: 0 16px;
          }
          .MuiGrid-item {
            padding-left: 24px;
          }
          .svgCard {
            padding-bottom: 160%;
          }
          .marginTopMinusThirtyFive {
            margin-top: 0;
          }
          .MuiGrid-item:nth-of-type(2) .svgCard {
            margin-top: 290px;
          }
          .MuiGrid-item:nth-of-type(3) .svgCard {
            margin-top: -240px;
          }
        }

        @media (max-width: 899px) {
          .gridContainer {
            padding: 0;
            margin: 0;
            width: 100%;
          }
          .MuiGrid-item {
            padding-left: 0;
          }
          .svgCard {
            padding-bottom: 140%;
          }
          .contentContainer {
            padding: 16px;
          }
          .cardRowOne {
            height: auto;
          }
          .cardRowTwo {
            height: auto;
          }
          .cardRowThree {
            height: auto;
          }
        }
        `}
      </style>
    </div>
  );
};

export default CardsSection;
