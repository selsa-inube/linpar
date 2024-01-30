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
import { linesTabsConfig } from "./config/linesTabs.config";

import { linesFormsConfig } from "./config/lines.config";
import { RenderLinesContentForm } from "./form/RenderLinesContentForm";
import { RenderLinesWithSpinnerForm } from "./form/RenderLinesWithSpinnerForm";
import { RenderLinesWithLinkForm } from "./form/RenderLinesWithLinkForm";

interface ILinesUIProps {
  handleTabChange: (id: string) => void;
  handleSubmit: (
    domain: string,
    block: string,
    tokenUpdate: typeof inube
  ) => void;
  selectedTab: string;
  linesConfig: typeof linesFormsConfig;
  token: typeof inube;
}

type FormType = "spinner" | "link" | "default";

interface IRenderForm {
  formType: string;
  selectedTab: string;
  handleSubmit: (
    domain: string,
    block: string,
    tokenUpdate: typeof inube
  ) => void;
  linesConfig: typeof linesFormsConfig;
  token: typeof inube;
}

function renderForm(props: IRenderForm) {
  const { formType, selectedTab, handleSubmit, linesConfig, token } = props;
  if (selectedTab !== formType) return null;

  const formTypeToComponentMap = {
    spinner: RenderLinesWithSpinnerForm,
    link: RenderLinesWithLinkForm,
    default: RenderLinesContentForm,
  };

  const Component =
    formTypeToComponentMap[formType as FormType] ||
    formTypeToComponentMap["default"];

  return (
    <Component
      key={formType}
      formType={formType}
      handleSubmit={handleSubmit}
      linesConfig={linesConfig}
      token={token}
    />
  );
}

export function LinesUI(props: ILinesUIProps) {
  const { token, handleSubmit, handleTabChange, linesConfig, selectedTab } =
    props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);

  const lineTabs = Object.keys(linesTabsConfig);

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
                {lineTabs.map((formType) => {
                  return renderForm({
                    formType,
                    selectedTab,
                    handleSubmit,
                    linesConfig,
                    token,
                  });
                })}
              </Stack>
            </StyledTabsContainer>
          </StyledContainer>
        </Stack>
      </Stack>
    </>
  );
}
