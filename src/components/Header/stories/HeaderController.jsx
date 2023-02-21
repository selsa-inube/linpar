import { useState } from "react";
import { HeaderUI } from "../interface";

const Controller = (args) => {
  const [menu] = useState(false);
  const handleMenu = (event) => {
    console.log(event);
  };

  const props = { ...args, menu, handleMenu };

  return <HeaderUI {...props} />;
};

export { Controller };
