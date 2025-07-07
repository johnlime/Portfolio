import React from "react";
import Typewriter from "typewriter-effect";

/*
I'M NOT USING THIS...IT'S TOO HARD TO SEE
*/

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
