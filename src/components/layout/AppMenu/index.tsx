import { AppMenuCard } from "@components/cards/AppMenuCard/index";
import {
  Breadcrumbs,
  Grid,
  Stack,
  useMediaQuery,
  Text,
  inube,
} from "@inube/design-system";
import { PageTitle } from "../../PageTitle";
import { StyledAppMenu, StyledDomainContainer } from "./styles";
import { IAppOption, IRoute } from "./types";

interface AppMenuProps {
  appName: string;
  appDescription: string;
  appOptions: IAppOption[];
  appRoute: IRoute[];
}

function AppMenu(props: AppMenuProps) {
  const { appName, appDescription, appOptions, appRoute } = props;

  const screenMovil = useMediaQuery("(max-width: 580px)");

  return (
    <StyledAppMenu>
      <Breadcrumbs crumbs={appRoute} />
      <Stack margin="s300 s0 s600 s0">
        <PageTitle
          title={appName}
          description={appDescription}
          navigatePage="/"
        />
      </Stack>
      <Stack direction="column" gap={inube.spacing.s600}>
        <StyledDomainContainer>
          <Text type="title" size={"medium"}>
            Colores
          </Text>
          <Grid
            templateColumns={
              screenMovil ? "1fr" : "repeat(auto-fill,minmax(auto, 205px))"
            }
            autoRows="auto"
            gap="s300"
          >
            {appOptions.map(
              (item) =>
                item.domain === "color" && (
                  <AppMenuCard
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                    description={item.description}
                    url={item.url}
                  />
                )
            )}
          </Grid>
        </StyledDomainContainer>
        <StyledDomainContainer>
          <Text type="title" size={"medium"}>
            Tipografía
          </Text>
          <Grid
            templateColumns={
              screenMovil ? "1fr" : "repeat(auto-fill,minmax(auto, 205px))"
            }
            autoRows="auto"
            gap="s300"
          >
            {appOptions.map(
              (item) =>
                item.domain === "typography" && (
                  <AppMenuCard
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                    description={item.description}
                    url={item.url}
                  />
                )
            )}
          </Grid>
        </StyledDomainContainer>
      </Stack>
    </StyledAppMenu>
  );
}

export { AppMenu };
export type { AppMenuProps };
