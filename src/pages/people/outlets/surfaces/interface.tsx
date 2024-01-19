import {
  Breadcrumbs,
  Stack,
  Tabs,
  useMediaQueries,
  inube,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import { StyledContainer, StyledTabsContainer } from "./styles";
import { peopleOptionsConfig } from "../options/config/people.config";
import { surfaceTabsConfig } from "./config/surfaceTabs.config";
import { RenderSurfaceContentForm } from "./form/RenderContentFormSurface";
import { IHandleSubmitProps } from "@src/routes/people";
import { surfaceFormsConfig } from "./config/surface.config";

interface SurfaceUIProps {
  token: typeof inube;
  surfaceConfig: typeof surfaceFormsConfig;
  selectedTab: string;
  handleSubmit: (props: IHandleSubmitProps) => void;
  handleTabChange: (id: string) => void;
}

export function SurfacesUI(props: SurfaceUIProps) {
  const { token, handleSubmit, surfaceConfig, selectedTab, handleTabChange } =
    props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);
  const colorTabs = Object.keys(surfaceTabsConfig);
  return (
    <>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        padding={smallScreen ? "s300" : "s400 s800"}
        gap={inube.spacing.s600}
      >
        <Stack gap="48px" direction="column">
          <Stack gap="24px" direction="column">
            <Breadcrumbs crumbs={peopleOptionsConfig[2].crumbs} />
            <PageTitle
              title={peopleOptionsConfig[2].label}
              description={peopleOptionsConfig[2].description}
              navigatePage="/people"
            />
          </Stack>
        </Stack>

        <StyledContainer>
          <StyledTabsContainer typeTabs={typeTabs}>
            <Stack direction="column" gap={inube.spacing.s400}>
              <Tabs
                tabs={Object.values(surfaceTabsConfig)}
                selectedTab={selectedTab}
                type={typeTabs ? "select" : "tabs"}
                onChange={handleTabChange}
              />
              {colorTabs.map(
                (formType: any) =>
                  selectedTab === formType! && (
                    <RenderSurfaceContentForm
                      key={formType}
                      formType={formType}
                      surfaceConfig={surfaceConfig}
                      token={token}
                      handleSubmit={handleSubmit}
                    />
                  )
              )}
            </Stack>
          </StyledTabsContainer>
        </StyledContainer>
      </Stack>
    </>
  );
}
