import React from "react";
import { useSearchParams } from "react-router-dom";

export const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const about1 = searchParams.get("about1");
  const about2 = searchParams.get("about2");

  return (
    <div>
      <div>About</div>
      <div>About1: {about1}</div>
      <div>About2: {about2}</div>
    </div>
  );
};
