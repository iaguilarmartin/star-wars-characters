import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import colors from '../../styles/colors';

const circleFadeDelay = keyframes`
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
`;

const Container = styled.div`
  position: relative;
  height: 48px;
  width: 48px;

  div {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &:before {
      content: '';
      display: block;
      margin: 0 auto;
      height: 15%;
      width: 15%;
      background-color: ${colors.yellow};
      border-radius: 100%;
      animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
    }
  }

  .circle2 {
    transform: rotate(30deg);
    &:before {
      animation-delay: -1.1s;
    }
  }
  .circle3 {
    transform: rotate(60deg);
    &:before {
      animation-delay: -1s;
    }
  }
  .circle4 {
    transform: rotate(90deg);
    &:before {
      animation-delay: -0.9s;
    }
  }
  .circle5 {
    transform: rotate(120deg);
    &:before {
      animation-delay: -0.8s;
    }
  }
  .circle6 {
    transform: rotate(150deg);
    &:before {
      animation-delay: -0.7s;
    }
  }
  .circle7 {
    transform: rotate(180deg);
    &:before {
      animation-delay: -0.6s;
    }
  }
  .circle8 {
    transform: rotate(210deg);
    &:before {
      animation-delay: -0.5s;
    }
  }
  .circle9 {
    transform: rotate(240deg);
    &:before {
      animation-delay: -0.4s;
    }
  }
  .circle10 {
    transform: rotate(270deg);
    &:before {
      animation-delay: -0.3s;
    }
  }
  .circle11 {
    transform: rotate(300deg);
    &:before {
      animation-delay: -0.2s;
    }
  }
  .circle12 {
    transform: rotate(330deg);
    &:before {
      animation-delay: -0.1s;
    }
  }
`;

const StyledSpinner = () => (
  <Container>
    <div className="circle1" />
    <div className="circle2" />
    <div className="circle3" />
    <div className="circle4" />
    <div className="circle5" />
    <div className="circle6" />
    <div className="circle7" />
    <div className="circle8" />
    <div className="circle9" />
    <div className="circle10" />
    <div className="circle11" />
    <div className="circle12" />
  </Container>
);

export default StyledSpinner;
