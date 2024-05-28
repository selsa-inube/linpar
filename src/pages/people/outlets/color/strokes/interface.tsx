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
import { RenderStrokesWithDividerForm } from "./form/RenderStrokesWithDividerForm";
import { RenderStrokesWithLinkForm } from "./form/RenderStrokesWithLinkForm";
import { strokesFormsConfig } from "./config/Strokes.config";
import { peopleOptionsConfig } from "@pages/people/outlets/options/config/people.config";
import { StrokeAppearance } from "./types";

interface IStrokesUIProps {
  handleTabChange: (id: StrokeAppearance) => void;
  selectedTab: StrokeAppearance;
  strokesConfig: typeof strokesFormsConfig;
}

interface IRenderForm {
  formType: string;
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
    divider: RenderStrokesWithDividerForm,
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
  const optionLabel = "Líneas";
  const selectedOption = peopleOptionsConfig.find(
    (item) => item.label === optionLabel
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
            {selectedOption && (
              <>
                <Breadcrumbs crumbs={selectedOption.crumbs} />
                <PageTitle
                  title={selectedOption.label}
                  description={selectedOption.description}
                  navigatePage="/people"
                />
              </>
            )}
          </Stack>
          <StyledContainer>
            <StyledTabsContainer $typeTabs={typeTabs}>
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
