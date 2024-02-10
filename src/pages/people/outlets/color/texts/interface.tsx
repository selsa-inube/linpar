import {
  Breadcrumbs,
  Stack,
  Tabs,
  useMediaQueries,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import { StyledContainer, StyledTabsContainer } from "./styles";

import { textsTabsConfig } from "./config/textsTabs.config";
import { RenderTextContentForm } from "./form/RenderTextContentForm";
import { textFormsConfig } from "./config/text.config";
import { peopleOptionsConfig } from "../../options/config/people.config";

interface TextUIProps {
  handleTabChange: (id: string) => void;
  selectedTab: string;
  textConfig: typeof textFormsConfig;
}

export function TextsUI(props: TextUIProps) {
  const { textConfig, selectedTab, handleTabChange } = props;
  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);

  const colorTabs = Object.keys(textsTabsConfig);

  return (
    <>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        padding={smallScreen ? "s300" : "s400 s800"}
      >
        <Stack gap="48px" direction="column">
          <Stack gap="24px" direction="column">
            <Breadcrumbs crumbs={peopleOptionsConfig[1].crumbs} />
            <PageTitle
              title={peopleOptionsConfig[1].label}
              description={peopleOptionsConfig[1].description}
              navigatePage="/people"
            />
          </Stack>
          <StyledContainer>
            <StyledTabsContainer typeTabs={typeTabs}>
              <Stack direction="column" gap="32px">
                <Tabs
                  onChange={handleTabChange}
                  selectedTab={selectedTab}
                  tabs={Object.values(textsTabsConfig)}
                  type={typeTabs ? "select" : "tabs"}
                />
                {colorTabs.map(
                  (formType) =>
                    selectedTab === formType! && (
                      <RenderTextContentForm
                        formType={formType}
                        key={formType}
                        textConfig={textConfig}
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
