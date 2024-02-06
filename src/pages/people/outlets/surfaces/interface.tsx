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
import { RenderContentFormSurfaceBlanket } from "./form/RenderContentFormSurfaceBlanket";
import { RenderContentFormSurfaceNav } from "./form/RenderContentFormNav";

interface SurfaceUIProps {
  handleTabChange: (id: string) => void;
  handleSubmit: (props: IHandleSubmitProps) => void;
  selectedTab: string;
  surfaceConfig: typeof surfaceFormsConfig;
  token: typeof inube;
}
type FormType = "blanket" | "nav" | "default";

interface IRenderForm {
  formType: string;
  selectedTab: string;
  handleSubmit: (props: IHandleSubmitProps) => void;
  surfaceConfig: typeof surfaceFormsConfig;
  token: typeof inube;
}

function renderForm(props: IRenderForm) {
  const { formType, selectedTab, handleSubmit, surfaceConfig, token } = props;
  if (selectedTab !== formType) return null;

  const formTypeToComponentMap = {
    blanket: RenderContentFormSurfaceBlanket,
    nav: RenderContentFormSurfaceNav,
    default: RenderSurfaceContentForm,
  };

  const Component =
    formTypeToComponentMap[formType as FormType] ||
    formTypeToComponentMap["default"];

  return (
    <Component
      key={formType}
      formType={formType}
      handleSubmit={handleSubmit}
      surfaceConfig={surfaceConfig}
      token={token}
    />
  );
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
              {colorTabs.map((formType) => {
                return renderForm({
                  formType,
                  selectedTab,
                  handleSubmit,
                  surfaceConfig,
                  token,
                });
              })}
            </Stack>
          </StyledTabsContainer>
        </StyledContainer>
      </Stack>
    </>
  );
}
