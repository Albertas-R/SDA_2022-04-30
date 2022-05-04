import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  console.log("Redirect page");

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return <div>Redirect</div>;
};
