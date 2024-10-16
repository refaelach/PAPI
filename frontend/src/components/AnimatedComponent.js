import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedComponent = ({ children }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default AnimatedComponent;

