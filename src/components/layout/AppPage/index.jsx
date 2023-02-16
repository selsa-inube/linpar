import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { StyledAppPage, StyledContainer, StyledMain } from "./styles";
import { Menu } from "../../navigation/Menu";
import { mockApps } from "../../../mocks/home/apps.mock";

function AppPage() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <StyledAppPage>
      <Header handleMenu={handleMenu} menu={menu} />
      <StyledContainer menu={menu}>
        <Menu links={mockApps} title="Menú" />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </StyledAppPage>
  );
}

export { AppPage };
