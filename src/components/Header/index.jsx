import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { HeaderUI } from "./interface";

function Header() {
  const { user } = useContext(AppContext);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <HeaderUI
      userName={user.username}
      businessUnit={user.company}
      appLogo={user.operator.logo}
      appLogoAlt={user.operator.name}
      nav={nav}
      handleNav={handleNav}
    />
  );
}

export { Header };
