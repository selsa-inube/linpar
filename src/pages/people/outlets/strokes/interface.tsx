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
import { IHandleSubmitProps } from "@src/routes/people";
import { strokesTabsConfig } from "./config/strokesTabs.config";

import { RenderStrokesContentForm } from "./form/RenderStrokesContentForm";
import { RenderStrokesWithSpinnerForm } from "./form/RenderStrokesWithSpinnerForm";
import { RenderStrokesWithLinkForm } from "./form/RenderStrokesWithLinkForm";
import { strokesFormsConfig } from "./config/Strokes.config";

interface IStrokesUIProps {
  handleTabChange: (id: string) => void;
  handleSubmit: (props: IHandleSubmitProps) => void;
  selectedTab: string;
  strokesConfig: typeof strokesFormsConfig;
  token: typeof inube;
}

type FormType = "spinner" | "link" | "default";

interface IRenderForm {
  formType: string;
  selectedTab: string;
  handleSubmit: (props: IHandleSubmitProps) => void;
  strokesConfig: typeof strokesFormsConfig;
  token: typeof inube;
}

function renderForm(props: IRenderForm) {
  const { formType, selectedTab, handleSubmit, strokesConfig, token } = props;
  if (selectedTab !== formType) return null;

  const formTypeToComponentMap = {
    spinner: RenderStrokesWithSpinnerForm,
    link: RenderStrokesWithLinkForm,
    default: RenderStrokesContentForm,
  };

  const Component =
    formTypeToComponentMap[formType as FormType] ||
    formTypeToComponentMap["default"];

  return (
    <Component
      key={formType}
      formType={formType}
      handleSubmit={handleSubmit}
      strokesConfig={strokesConfig}
      token={token}
    />
  );
}

export function StrokesUI(props: IStrokesUIProps) {
  const { token, handleSubmit, handleTabChange, strokesConfig, selectedTab } =
    props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);

  const strokeTabs = Object.keys(strokesTabsConfig);

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
                  tabs={Object.values(strokesTabsConfig)}
                  selectedTab={selectedTab}
                  type={typeTabs ? "select" : "tabs"}
                  onChange={handleTabChange}
                />
                {strokeTabs.map((formType) => {
                  return renderForm({
                    formType,
                    selectedTab,
                    handleSubmit,
                    strokesConfig,
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
