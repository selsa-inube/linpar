import {
  Breadcrumbs,
  Stack,
  Tabs,
  useMediaQueries,
} from "@inube/design-system";
import { PageTitle } from "@components/PageTitle";
import { StyledContainer, StyledTabsContainer } from "./styles";
import { strokesTabsConfig } from "./config/strokesTabs.config";

import {
  RenderStrokesContentForm,
  RenderStrokesContentFormProps,
} from "./form/RenderStrokesContentForm";
import { RenderStrokesWithSpinnerForm } from "./form/RenderStrokesWithSpinnerForm";
import { RenderStrokesWithLinkForm } from "./form/RenderStrokesWithLinkForm";
import { strokesFormsConfig } from "./config/Strokes.config";
import { peopleOptionsConfig } from "@pages/people/outlets/options/config/people.config";
import { StrokeAppearance } from "./types";
import { useLocation } from "react-router-dom";

interface IStrokesUIProps {
  handleTabChange: (id: string) => void;
  selectedTab: StrokeAppearance;
  strokesConfig: typeof strokesFormsConfig;
}

interface IRenderForm {
  formType: StrokeAppearance;
  selectedTab: StrokeAppearance;
  strokesConfig: typeof strokesFormsConfig;
}

function renderForm(props: IRenderForm) {
  const { formType, selectedTab, strokesConfig } = props;
  if (selectedTab !== formType) return null;

  const formTypeToComponentMap: {
    [key: string]: React.ComponentType<RenderStrokesContentFormProps>;
  } = {
    spinner: RenderStrokesWithSpinnerForm,
    link: RenderStrokesWithLinkForm,
  };

  const Component =
    formTypeToComponentMap[formType as keyof typeof formTypeToComponentMap] ||
    RenderStrokesContentForm;

  return (
    <Component
      key={String(formType)}
      formType={formType}
      strokesConfig={strokesConfig}
    />
  );
}

export function StrokesUI(props: IStrokesUIProps) {
  const { handleTabChange, strokesConfig, selectedTab } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);

  const strokeTabs = Object.keys(strokesTabsConfig);
  const location = useLocation();
  const label = peopleOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  return (
    <>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        padding={smallScreen ? "s300" : "s400 s800"}
      >
        <Stack gap="48px" direction="column">
          <Stack gap="24px" direction="column">
            {label && (
              <>
                <Breadcrumbs crumbs={label.crumbs} />
                <PageTitle
                  title={label.label}
                  description={label.description}
                  navigatePage="/people"
                />
              </>
            )}
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
                    strokesConfig,
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
