import { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineChevronRight, MdOutlineDoorFront } from "react-icons/md";
import { Header } from "@inubekit/header";
import { PageTitle } from "@components/PageTitle";
// import { MenuUser } from "@components/navigation/MenuUser";
// import { MenuSection } from "@components/navigation/MenuSection";
// import { LogoutModal } from "@components/feedback/LogoutModal";
import {
  bussinessUnitOptionTotal,
  navigationConfig,
  removeBussinessUnit,
  userMenu,
} from "@components/layout/AppPage/config/apps.config";
import { AppCard } from "@components/cards/AppCard";
import { LinparContext } from "@context/AppContext";
import { ICardData } from "./types";
import {
  StyledCollapse,
  StyledCollapseIcon,
  StyledContainer,
  StyledContainerCards,
  StyledContainerSection,
  StyledContentImg,
  StyledFooter,
  StyledHeaderContainer,
  StyledLogo,
  StyledTitle,
} from "./styles";
import { Icon } from "@inubekit/icon";
import { IBusinessUnitsPortalStaff } from "@src/services/businessUnitsPortalStaff/types";
import { useMediaQuery } from "@inubekit/hooks";
import { BusinessUnitChange } from "@components/inputs/BusinessUnitChange";
import { ThemeName, useTheme } from "@src/context/ThemeContext";

interface HomeProps {
  data?: ICardData[];
}

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

function HomeUI(props: HomeProps) {
  const { data } = props;
  const { linparData, businessUnitsToTheStaff, setBusinessUnitSigla } =
    useContext(LinparContext);
  const { setThemeName } = useTheme();
  const [showUserMenu, setShowUserMenu] = useState(false);
  // const [showLogoutModal, setShowLogoutModal] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const [collapse, setCollapse] = useState(false);
  const [selectedClient, setSelectedClient] = useState<string>("");
  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const businessUnitChangeRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery("(max-width: 944px)");

  const username = linparData.user.userName.split(" ")[0];
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

  // const handleToggleLogoutModal = () => {
  //   setShowLogoutModal(!showLogoutModal);
  //   setShowUserMenu(false);
  // };

  const handleLogoClick = (businessUnit: IBusinessUnitsPortalStaff) => {
    const selectJSON = JSON.stringify(businessUnit);
    setBusinessUnitSigla(selectJSON);
    setSelectedClient(businessUnit.abbreviatedName);
    if (businessUnit.abbreviatedName === "Sistemas Enlínea S.A.") {
      setThemeName("sistemasenlinea");
    } else {
      setThemeName(businessUnit.abbreviatedName as ThemeName);
    }
    setCollapse(false);
  };
  const filterDataConfig = () => {
    if (
      bussinessUnitOptionTotal.includes(
        linparData.businessUnit.businessUnitPublicCode
      )
    )
      return data;
    return data?.filter((card) => !removeBussinessUnit.includes(card.id));
  };

  return (
    <>
      <StyledContainer>
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

        <StyledContainerSection>
          <StyledTitle>
            <PageTitle
              title={`Bienvenido, ${username}`}
              description="Selecciona una opción para empezar a ajustar la configuración de tu software Linix"
              icon={<MdOutlineDoorFront />}
            />
          </StyledTitle>
          <StyledContainerCards>
            {data &&
              filterDataConfig()?.map((card, index) => (
                <AppCard
                  key={card.id}
                  label={card.label}
                  description={card.description}
                  icon={card.icon}
                  url={card.url}
                />
              ))}
          </StyledContainerCards>
        </StyledContainerSection>
        <StyledFooter>
          <StyledLogo src={linparData.businessManager.urlBrand} />
        </StyledFooter>
      </StyledContainer>
    </>
  );
}

export { HomeUI };
