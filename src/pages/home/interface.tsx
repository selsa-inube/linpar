import { useContext } from "react";
import { MdOutlineDoorFront } from "react-icons/md";
import {
  Header,
  Grid,
  Stack,
  Nav,
  useMediaQueries,
} from "@inube/design-system";

import { AppContext } from "@src/context";
import { PageTitle } from "@components/PageTitle";
import { AppCard } from "@components/cards/AppCard";
import { mediaQuerySettings, pageTitlePaddingSettings } from "./types";
import {
  StyledContentImg,
  StyledLogo,
} from "@components/layout/AppPage/styles";

import { IApps } from "./types";
import { navigationConfig, logoutConfig } from "./config/apps.config";
import { StyledHome } from "./styles";

const getPageTitlePadding = (
  matches: { [x: string]: boolean },
  pageTitlePaddingSettings: { [x: string]: string }
) => {
  const matchingQuery = Object.keys(pageTitlePaddingSettings).find(
    (mediaQuerie) => matches[mediaQuerie]
  );
  return matchingQuery ? pageTitlePaddingSettings[matchingQuery] : "s400 s800";
};

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

  const mediaQueries = mediaQuerySettings;

  const matches = useMediaQueries(mediaQueries);

  const [laptop] = Object.values(useMediaQueries(["(min-width: 945px)"]));

  return (
    <StyledHome>
      <Header
        portalId="portal"
        navigation={navigationConfig}
        logoURL={renderLogo(user.operator.logo)}
        userName={user.username}
        client={user.company}
      />
      <Stack height="calc(100vh - 56px)">
        {laptop && (
          <Nav
            navigation={navigationConfig}
            logoutPath={logoutConfig.logoutPath}
            logoutTitle={logoutConfig.logoutTitle}
          />
        )}
        <Stack
          gap="20px"
          direction="column"
          padding={getPageTitlePadding(matches, pageTitlePaddingSettings)}
        >
          <PageTitle
            title={`Bienvenido ${user.username}`}
            description="Selecciona una opción para empezar a ajustar la configuración de tu software Linix"
            icon={<MdOutlineDoorFront />}
          />
          <Grid
            templateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
            justifyContent="center"
            alignItems="start"
            alignContent="start"
            gap="s300"
            padding="s0"
            margin="s0 auto"
          >
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
          </Grid>
        </Stack>
      </Stack>
    </StyledHome>
  );
}

export { HomeUI };
export type { HomeUIProps };
