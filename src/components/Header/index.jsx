import { useState } from "react";
import { useContext } from "react";
import { HeaderUI } from "./interface";
import { AppContext } from "../../context";

function Header() {
  const { user } = useContext(AppContext);
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <HeaderUI
      userName={user.username}
      businessUnit={user.company}
      appLogo={user.operator.logo}
      appLogoAlt={user.operator.name}
      menu={menu}
      handleMenu={handleMenu}
    />
  );
}

export { Header };
