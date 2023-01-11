import React from "react";
import { useSpring, animated } from "react-spring";

const SpringIn = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    delay: 700,
    transform: "translateX(0px)",
    from: {
      opacity: 0,
      transform: "translateX(-250px)",
    },
  });
  return <animated.div style={props}>{children}</animated.div>;
};

export default SpringIn;
