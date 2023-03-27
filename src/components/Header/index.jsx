import { useState, useEffect } from "react";
import { useContext } from "react";
import { HeaderUI } from "./interface";
import { AppContext } from "../../context";

function Header() {
  const { user } = useContext(AppContext);
  const [menu, setMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const actualSize = windowSize < 450 ? "small" : "large";

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <HeaderUI
      userName={user.username}
      businessUnit={user.company}
      size={actualSize}
      appLogo={user.operator.logo}
      appLogoAlt={user.operator.name}
      menu={menu}
      handleMenu={handleMenu}
    />
  );
}

export { Header };
