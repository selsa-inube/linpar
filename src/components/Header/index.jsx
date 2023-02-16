import { useContext } from "react";
import { HeaderUI } from "./interface";
import { AppContext } from "../../context";

function Header(props) {
  const { user } = useContext(AppContext);
  const { handleMenu, menu } = props;
  return (
    <HeaderUI
      username={user.username}
      businessName={user.company}
      appLogo={user.operator.logo}
      appLogoAlt={user.operator.name}
      menu={menu}
      handleMenu={handleMenu}
    />
  );
}

export { Header };
