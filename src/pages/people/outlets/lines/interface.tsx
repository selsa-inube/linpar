import {
  Breadcrumbs,
  Stack,
  Tabs,
  useMediaQuery,
  inube,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";

import { StyledContainer, StyledTabsContainer } from "./styles";
import { peopleOptionsConfig } from "../options/config/people.config";
import { IHandleSubmitProps } from "@src/routes/people";
import { linesTabsConfig } from "./config/linesTabs.config";
import { RenderLinesContentForm } from "./RenderLinesContentForm";

interface LinesUIProps {
  token: typeof inube;
  linesConfig: any;
  selectedTab: string;
  handleSubmit: (props: IHandleSubmitProps) => void;
  handleTabChange: (id: string) => void;
}

export function LinesUI(props: LinesUIProps) {
  const { token, handleSubmit, handleTabChange, linesConfig, selectedTab } =
    props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQuery(["(max-width: 580px)", "(max-width: 1073px)"]);

  const colorTabs = Object.keys(linesTabsConfig);

  return (
    <>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        padding={smallScreen ? "s300" : "s400 s800"}
      >
        <Stack gap="48px" direction="column">
          <Stack gap="24px" direction="column">
            <Breadcrumbs crumbs={peopleOptionsConfig[3].crumbs} />
            <PageTitle
              title={peopleOptionsConfig[3].label}
              description={peopleOptionsConfig[3].description}
              navigatePage="/people"
            />
          </Stack>
          <StyledContainer>
            <StyledTabsContainer typeTabs={typeTabs}>
              <Stack direction="column" gap="32px">
                <Tabs
                  tabs={Object.values(linesTabsConfig)}
                  selectedTab={selectedTab}
                  type={typeTabs ? "select" : "tabs"}
                  onChange={handleTabChange}
                />
                {colorTabs.map(
                  (formType) =>
                    selectedTab === formType && (
                      <RenderLinesContentForm
                        key={formType}
                        formType={formType}
                        handleSubmit={handleSubmit}
                        linesConfig={linesConfig}
                        token={token}
                      />
                    )
                )}
              </Stack>
            </StyledTabsContainer>
          </StyledContainer>
        </Stack>
      </Stack>
    </>
  );
}
