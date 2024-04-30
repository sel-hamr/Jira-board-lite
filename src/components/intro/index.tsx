import React from "react";
import { TypewriterEffectSmooth } from "../typewriter-effect";

function Intro() {
  const words = [
    {
      text: "welcome",
    },
    {
      text: "to our",
    },
    {
      text: "lite",
    },
    {
      text: "jira.",
      className: "text-blue-500",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}

export default Intro;
