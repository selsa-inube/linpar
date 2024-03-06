import {
  Breadcrumbs,
  Stack,
  Tabs,
  useMediaQueries,
  inube,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import { StyledContainer, StyledTabsContainer } from "./styles";

import { surfaceTabsConfig } from "./config/surfaceTabs.config";
import {
  RenderSurfaceContentForm,
  RenderSurfaceContentFormProps,
} from "./form/RenderContentFormSurface";
import { surfaceFormsConfig } from "./config/surface.config";
import { RenderContentFormSurfaceBlanket } from "./form/RenderContentFormSurfaceBlanket";
import { peopleOptionsConfig } from "@pages/people/outlets/options/config/people.config";
import { RenderContentFormSurfaceNav } from "./form/RenderContentFormNav";
import { SurfaceAppearance } from "./types";

interface SurfaceUIProps {
  handleTabChange: (id: SurfaceAppearance) => void;
  selectedTab: SurfaceAppearance;
  surfaceConfig: typeof surfaceFormsConfig;
}

interface IRenderForm {
  formType: SurfaceAppearance;
  selectedTab: SurfaceAppearance;
  surfaceConfig: typeof surfaceFormsConfig;
}

function renderForm(props: IRenderForm) {
  const { formType, selectedTab, surfaceConfig } = props;
  if (selectedTab !== formType) return null;

  const formTypeToComponentMap: {
    [key: string]: React.ComponentType<RenderSurfaceContentFormProps>;
  } = {
    blanket: RenderContentFormSurfaceBlanket,
    nav: RenderContentFormSurfaceNav,
  };

  const Component =
    formTypeToComponentMap[formType] || RenderSurfaceContentForm;

  return (
    <Component
      key={String(formType)}
      formType={formType}
      surfaceConfig={surfaceConfig}
    />
  );
}

export function SurfacesUI(props: SurfaceUIProps) {
  const { surfaceConfig, selectedTab, handleTabChange } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);
  const colorTabs: SurfaceAppearance[] = Object.keys(
    surfaceTabsConfig
  ) as SurfaceAppearance[];
  const optionLabel = "Superficies";
  const selectedOption = peopleOptionsConfig.find(
    (item) => item.label === optionLabel
  );

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
                  surfaceConfig,
                });
              })}
            </Stack>
          </StyledTabsContainer>
        </StyledContainer>
      </Stack>
    </>
  );
}
