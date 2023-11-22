import { useContext } from "react";
import { MdOutlineDoorFront } from "react-icons/md";
import { Header, Grid, Stack, useMediaQueries } from "@inube/design-system";

import { AppContext } from "@src/context";
import { PageTitle } from "@components/PageTitle";
import { AppCard } from "@components/cards/AppCard";
import {
  mediaQuerySettings,
  appListpaddingSettings,
  pageTitlePaddingSettings,
} from "./types";
import {
  StyledContentImg,
  StyledLogo,
} from "@components/layout/AppPage/styles";

import { IApps } from "./types";
import { navigationConfig } from "./config/apps.config";
import { StyledHome } from "./styles";

const getTemplateColumns = (
  mediaQueries: string[],
  matches: { [x: string]: boolean },
  templateColumnsSettings: { [x: string]: string }
): string => {
  const matchingQuery = mediaQueries.find(
    (mediaQuerie) => matches[mediaQuerie]
  );
  return matchingQuery
    ? templateColumnsSettings[matchingQuery]
    : "repeat(auto-fit, 250px)";
};

const getPadding = (
  mediaQueries: string[],
  matches: { [x: string]: boolean },
  appListpaddingSettings: { [x: string]: string }
): string => {
  const matchingQuery = mediaQueries.find(
    (mediaQuerie) => matches[mediaQuerie]
  );
  return matchingQuery ? appListpaddingSettings[matchingQuery] : "s0 s800";
};

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

  const mediaQueries = Object.keys(mediaQuerySettings);

  const matches = useMediaQueries(mediaQueries);

  return (
    <StyledHome>
      <Header
        portalId="portal"
        navigation={navigationConfig}
        logoURL={renderLogo(user.operator.logo)}
        userName={user.username}
        client={user.company}
      />
      <Stack
        id="PageTitle"
        gap="4px"
        padding={getPageTitlePadding(matches, pageTitlePaddingSettings)}
      >
        <PageTitle
          title={`Bienvenido ${user.username}`}
          description="Selecciona una opción para empezar a ajustar la configuración de tu software Linix"
          icon={<MdOutlineDoorFront />}
        />
      </Stack>

      <Grid
        templateColumns={getTemplateColumns(
          mediaQueries,
          matches,
          mediaQuerySettings
        )}
        justifyContent="center"
        alignItems="center"
        alignContent="start"
        gap="s300"
        padding={getPadding(mediaQueries, matches, appListpaddingSettings)}
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
    </StyledHome>
  );
}

export { HomeUI };
export type { HomeUIProps };
