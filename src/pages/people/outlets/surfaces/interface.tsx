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
import { surfaceFormsConfig } from "./config/surface.config";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
import { IHandleSubmitProps } from "@src/context/TokenContext/types";

interface SurfaceUIProps {
  handleTabChange: (id: string) => void;
  handleSubmit: (props: IHandleSubmitProps) => void;
  selectedTab: string;
  surfaceConfig: typeof surfaceFormsConfig;
  token: typeof inube;
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
                onChange={handleTabChange}
                selectedTab={selectedTab}
                tabs={Object.values(surfaceTabsConfig)}
                type={typeTabs ? "select" : "tabs"}
              />
              {colorTabs.map(
                (formType) =>
                  selectedTab === formType && (
                    <RenderSurfaceContentForm
                      formType={formType as Appearance}
                      handleSubmit={handleSubmit}
                      key={formType}
                      surfaceConfig={surfaceConfig}
                      token={token}
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
