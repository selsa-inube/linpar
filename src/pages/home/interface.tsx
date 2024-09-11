import { useContext, useEffect, useRef, useState } from "react";
import { MdLogout, MdOutlineDoorFront } from "react-icons/md";
import { Header } from "@inubekit/header";
import { Stack } from "@inubekit/stack";

import { PageTitle } from "@components/PageTitle";
import { AppContext } from "@context/AppContext";
import { MenuUser } from "@components/navigation/MenuUser";
import { MenuSection } from "@components/navigation/MenuSection";
import { LogoutModal } from "@components/feedback/LogoutModal";
import { navigationConfig } from "@components/layout/AppPage/config/apps.config";
import { AppCard } from "@components/cards/AppCard";
import { ICardData } from "./types";
import {
  StyledContainer,
  StyledContainerCards,
  StyledContentImg,
  StyledHeaderContainer,
  StyledLogo,
  StyledMenuContainer,
  StyledTitle,
} from "./styles";

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

  const { user } = useContext(AppContext);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const username = user.username.split(" ")[0];
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
    <StyledContainer>
      <StyledHeaderContainer>
        <Header
          portalId="portal"
          navigation={navigationConfig}
          logoURL={renderLogo(user.operator.logo)}
          userName={user.username}
          client={user.company}
        />
      </StyledHeaderContainer>
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
      ,
      {showLogoutModal && (
        <LogoutModal
          logoutPath="/logout"
          handleShowBlanket={handleToggleLogoutModal}
        />
      )}
      <StyledTitle>
        <PageTitle
          title={`Bienvenido, ${username}`}
          description="Selecciona una opción para empezar a ajustar la configuración de tu software Linix"
          icon={<MdOutlineDoorFront />}
        />
      </StyledTitle>
      <StyledContainerCards>
        {user.company === "sistemasenlinea" ? (
          data?.map((card, index) => (
            <Stack key={index}>
              <AppCard
                key={card.id}
                label={card.label}
                description={card.description}
                icon={card.icon}
                url={card.url}
              />
            </Stack>
          ))
        ) : (
          <AppCard
            key={data?.[0].id}
            label={data?.[0].label || ""}
            description={data?.[0].description || ""}
            icon={data?.[0].icon || <></>}
            url={data?.[0].url || ""}
          />
        )}
      </StyledContainerCards>
    </StyledContainer>
  );
}

export { HomeUI };
