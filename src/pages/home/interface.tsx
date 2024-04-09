import { useContext, useEffect, useRef, useState } from "react";
import { Header, Stack, Nav, useMediaQueries } from "@inube/design-system";
import { AppContext } from "@context/AppContext";
import {
  StyledContentImg,
  StyledLogo,
} from "@components/layout/AppPage/styles";

import { navigationConfig, logoutConfig } from "./config/apps.config";
import { StyledHome, StyledMenuContainer } from "./styles";
import { LogoutModal } from "@src/components/feedback/LogoutModal";
import { MenuUser } from "@src/components/navigation/MenuUser";
import { MenuSection } from "@src/components/navigation/MenuSection";
import { MdLogout } from "react-icons/md";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

function HomeUI() {
  const { user } = useContext(AppContext);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const [laptop] = Object.values(useMediaQueries(["(min-width: 945px)"]));

  const handleClickOutside = (event: MouseEvent) => {
    if (
      userMenuRef.current &&
      !userMenuRef.current.contains(event.target as Node) &&
      event.target !== userMenuRef.current
    ) {
      setShowUserMenu(false);
    }
  };

  useEffect(() => {
    const selectUser = document.querySelector("header div div:nth-child(2)");
    const handleToggleuserMenu = () => {
      setShowUserMenu(!showUserMenu);
    };

    document.addEventListener("mousedown", handleClickOutside);
    selectUser?.addEventListener("mouseup", handleToggleuserMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserMenu]);

  const handleToggleLogoutModal = () => {
    setShowLogoutModal(!showLogoutModal);
    setShowUserMenu(false);
  };

  return (
    <StyledHome>
      <Header
        portalId="portal"
        navigation={navigationConfig}
        logoURL={renderLogo(user.operator.logo)}
        userName={user.username}
        client={user.company}
      />
      {showUserMenu && (
        <StyledMenuContainer ref={userMenuRef}>
          <MenuUser userName={user.username} businessUnit={user.company} />
          <MenuSection
            sections={[
              {
                links: [
                  {
                    title: "Cerrar sesión",
                    iconBefore: <MdLogout />,
                    onClick: handleToggleLogoutModal,
                  },
                ],
              },
            ]}
            divider={true}
          />
        </StyledMenuContainer>
      )}

      {showLogoutModal && (
        <LogoutModal
          logoutPath="/logout"
          handleShowBlanket={handleToggleLogoutModal}
        />
      )}
      <Stack height="calc(100vh - 56px)">
        {laptop && (
          <Nav
            navigation={navigationConfig}
            logoutPath={logoutConfig.logoutPath}
            logoutTitle={logoutConfig.logoutTitle}
          />
        )}
      </Stack>
    </StyledHome>
  );
}

export { HomeUI };
