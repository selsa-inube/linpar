import { useContext } from "react";
import { HeaderUI } from "./interface";
import { AppContext } from "../../context";

function Header() {
  const { user } = useContext(AppContext);
  return (
    <HeaderUI
      username={user.username}
      businessName={user.company}
      appLogo={user.operator.logo}
      appLogoAlt={user.operator.name}
    />
  );
}

export { Header };
