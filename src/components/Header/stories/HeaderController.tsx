import { useState } from "react";
import { HeaderUI, HeaderUIProps } from "../interface";

const Controller = (args: HeaderUIProps) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const props = { ...args, nav, handleNav };

  return <HeaderUI {...props} />;
};

export { Controller };
