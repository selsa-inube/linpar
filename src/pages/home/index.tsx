import { useContext, useEffect, useRef, useState } from "react";
import { MdLogout, MdOutlineDoorFront } from "react-icons/md";
import { Header } from "@inubekit/header";

import { PageTitle } from "@components/PageTitle";
import { AppContext } from "@context/AppContext";
import { MenuUser } from "@components/navigation/MenuUser";
import { MenuSection } from "@components/navigation/MenuSection";
import { LogoutModal } from "@components/feedback/LogoutModal";
import { navigationConfig } from "@components/layout/AppPage/config/apps.config";
import { ICardData } from "./types";
import {
  StyledContainer,
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

function Home(props: HomeProps) {
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

  console.log(data); // se utilizara data para mostrar los datos de las cards en la siguiente tarea

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
    </StyledContainer>
  );
}

export { Home };
