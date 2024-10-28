import { useContext, useEffect, useRef, useState } from "react";
import { MdLogout } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { Header, Grid, useMediaQuery } from "@inube/design-system";
import { Nav } from "@inubekit/nav";
import { LinparContext } from "@context/AppContext";
import { MenuSection } from "@components/navigation/MenuSection";
import { MenuUser } from "@components/navigation/MenuUser";
import { LogoutModal } from "@components/feedback/LogoutModal";

import {
  navigationConfig,
  bussinessUnitOptionTotal,
  removeBussinessUnit,
  AppsConfig,
} from "./config/apps.config";

import {
  StyledAppPage,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
  StyledContainerNav,
  StyledMenuContainer,
  StyledHeaderContainer,
} from "./styles";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

function AppPage() {
  const { businessUnitSigla, linparData } = useContext(LinparContext);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { actionConfig } = AppsConfig();
  const smallScreen = useMediaQuery("(max-width: 849px)");

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

  const filterNavigationConfig = () => {
    const businessUnit = JSON.parse(businessUnitSigla);
    if (
      bussinessUnitOptionTotal.includes(businessUnit.businessUnitPublicCode)
    ) {
      return navigationConfig.items;
    } else {
      const DataConfig = { ...navigationConfig.items };
      removeBussinessUnit.forEach((unit) => {
        delete DataConfig.sections.administrate.links[
          unit as keyof typeof DataConfig.sections.administrate.links
        ];
      });

      return DataConfig;
    }
  };

  const handleToggleLogoutModal = () => {
    setShowLogoutModal(!showLogoutModal);
    setShowUserMenu(false);
  };

  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" height="100vh" justifyContent="unset">
        <StyledHeaderContainer>
          <Header
            portalId="portal"
            navigation={navigationConfig}
            logoURL={renderLogo(linparData.businessUnit.urlLogo)}
            userName={linparData.user.userName}
          />
        </StyledHeaderContainer>
        {showUserMenu && (
          <StyledMenuContainer ref={userMenuRef}>
            <MenuUser userName={linparData.user.userName} />
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

        <StyledContainer>
          <Grid
            templateColumns={smallScreen ? "1fr" : "auto 1fr"}
            alignContent="unset"
          >
            {!smallScreen && (
              <StyledContainerNav>
                <Nav
                  navigation={filterNavigationConfig()}
                  actions={actionConfig}
                  footerLogo={linparData.businessManager.urlBrand}
                />
              </StyledContainerNav>
            )}

            <StyledMain>
              <Outlet />
            </StyledMain>
          </Grid>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
}

export { AppPage };
