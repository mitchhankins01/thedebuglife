import React from "react";
import { navigate } from "gatsby";

const Index = () => {
  React.useEffect(() => {
    navigate("/blog/");
  }, []);
  
  return null;
};

export default Index;
