import {
  Breadcrumbs,
  Stack,
  Tabs,
  useMediaQueries,
  inube,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import { StyledContainer, StyledTabsContainer } from "./styles";
import { paletteTabsConfig } from "./config/paletteTabs.config";
import { RenderContentFormPalette } from "./form/RenderContentFormPalette";
import { peopleOptionsConfig } from "../../options/config/people.config";
import { PaletteAppearance } from "./types";

interface PaletteUIProps {
  handleTabChange: (id: string) => void;
  selectedTab: PaletteAppearance;
  paletteConfig: typeof paletteTabsConfig;
}

export function PaletteUI(props: PaletteUIProps) {
  const { selectedTab, handleTabChange } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);
  const colorTabs = Object.keys(paletteTabsConfig);
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
            <Breadcrumbs crumbs={peopleOptionsConfig[0].crumbs} />
            <PageTitle
              title={peopleOptionsConfig[0].label}
              description={peopleOptionsConfig[0].description}
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
                tabs={Object.values(paletteTabsConfig)}
                type={typeTabs ? "select" : "tabs"}
              />
              {colorTabs.map((formType) => {
                return (
                  selectedTab === formType && (
                    <RenderContentFormPalette
                      key={formType}
                      formType={formType}
                    />
                  )
                );
              })}
            </Stack>
          </StyledTabsContainer>
        </StyledContainer>
      </Stack>
    </>
  );
}
