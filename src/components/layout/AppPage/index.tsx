import { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@inube/design-system";
import { Nav } from "@inubekit/nav";
import { Grid } from "@inubekit/grid";
import { LinparContext } from "@context/AppContext";
import { Header } from "@inubekit/header";
import { BusinessUnitChange } from "@components/inputs/BusinessUnitChange";
import { Icon } from "@inubekit/icon";

import { IBusinessUnitsPortalStaff } from "@services/businessUnitsPortalStaff/types";
import { ThemeName, useTheme } from "@context/ThemeContext";
import {
  navigationConfig,
  bussinessUnitOptionTotal,
  removeBussinessUnit,
  AppsConfig,
  userMenu,
} from "./config/apps.config";

import {
  StyledAppPage,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
  StyledContainerNav,
  StyledHeaderContainer,
  StyledCollapse,
  StyledCollapseIcon,
} from "./styles";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

function AppPage() {
  const {
    linparData,
    businessUnitsToTheStaff,
    businessUnitSigla,
    setBusinessUnitSigla,
  } = useContext(LinparContext);
  const { setThemeName } = useTheme();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { actionConfig } = AppsConfig();
  const [collapse, setCollapse] = useState(false);
  const [selectedClient, setSelectedClient] = useState<string>("");
  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const businessUnitChangeRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery("(max-width: 944px)");
  const smallScreen = useMediaQuery("(max-width: 849px)");

  const navigate = useNavigate();

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

  const handleLogoClick = (businessUnit: IBusinessUnitsPortalStaff) => {
    const selectJSON = JSON.stringify(businessUnit);
    setBusinessUnitSigla(selectJSON);

    navigate("/");
    setSelectedClient(businessUnit.abbreviatedName);
    if (businessUnit.abbreviatedName === "Sistemas Enlínea S.A.") {
      setThemeName("sistemasenlinea");
    } else {
      setThemeName(businessUnit.abbreviatedName as ThemeName);
    }
    setCollapse(false);
  };
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

  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" height="100vh" justifyContent="unset">
        <StyledHeaderContainer>
          <Header
            portalId="portal"
            navigation={navigationConfig}
            logoURL={renderLogo(linparData.businessUnit.urlLogo)}
            user={{
              username: linparData.user.userName,
            }}
            menu={userMenu}
          />

          {businessUnitsToTheStaff.length > 1 && (
            <>
              <StyledCollapseIcon
                $collapse={collapse}
                onClick={() => setCollapse(!collapse)}
                $isTablet={isTablet}
                ref={collapseMenuRef}
              >
                <Icon
                  icon={<MdOutlineChevronRight />}
                  appearance="primary"
                  size="24px"
                  cursorHover
                />
              </StyledCollapseIcon>
              {collapse && (
                <StyledCollapse ref={businessUnitChangeRef}>
                  <BusinessUnitChange
                    businessUnits={businessUnitsToTheStaff}
                    onLogoClick={handleLogoClick}
                    selectedClient={selectedClient}
                  />
                </StyledCollapse>
              )}
            </>
          )}
        </StyledHeaderContainer>

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
