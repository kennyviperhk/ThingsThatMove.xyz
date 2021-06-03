import React from 'react';
import { Easing } from 'tweenkle';
import { useAnimateProps } from 'react-animate-props';

const AnimatedNumberLabel = ({ number }) => {
  const animatedNumber = useAnimateProps(number, {
    ease: Easing.Quad.In,
    delay: 0,
    duration: 1500,
    onAnimateProgress: value => {
      return value;
    },
    onAnimateComplete: value => {
      return value;
    },
  });

  return animatedNumber;
};

export default AnimatedNumberLabel;
