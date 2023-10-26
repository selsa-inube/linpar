import { useContext } from "react";
import { MdOutlineDoorFront } from "react-icons/md";
import { Header } from "@inube/design-system";

import { AppContext } from "@src/context";
import { PageTitle } from "@components/PageTitle";
import { AppCard } from "@components/cards/AppCard";

import {
  StyledContentImg,
  StyledLogo,
} from "@components/layout/AppPage/styles";

import { IApps } from "./types";
import { navigationConfig } from "./config/apps.config";
import { StyledAppsList, StyledHome, StyledPageTitle } from "./styles";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

interface HomeUIProps {
  apps: IApps[];
}

function HomeUI(props: HomeUIProps) {
  const { apps } = props;
  const { user } = useContext(AppContext);

  return (
    <StyledHome>
      <Header
        portalId="portal"
        navigation={navigationConfig}
        logoURL={renderLogo(user.operator.logo)}
        userName={user.username}
        client={user.company}
      />
      <StyledPageTitle>
        <PageTitle
          title={`Bienbenido ${user.username}`}
          description="Selecciona una opción para empezar a ajustar la configuración de tu software Linix"
          icon={<MdOutlineDoorFront />}
        />
      </StyledPageTitle>
      <StyledAppsList>
        {apps.map((app) => (
          <li key={app.url}>
            <AppCard
              key={app.id}
              label={app.label}
              description={app.description}
              icon={app.icon}
              url={app.url}
            />
          </li>
        ))}
      </StyledAppsList>
    </StyledHome>
  );
}

export { HomeUI };
export type { HomeUIProps };
