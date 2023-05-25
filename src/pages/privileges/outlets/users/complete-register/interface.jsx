import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inube/design-system";
import { PageTitle } from "../../../../../components/PageTitle";
import {
  stepsRegisterUserConfig,
  completeRegisterUserConfig,
} from "./config/completeRegister.config";
import { StyledContainer } from "./styles";
import { Assisted } from "../../../../../components/feedback/Assisted";

function CompleteRegisterUI(props) {
  const { id } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={completeRegisterUserConfig[0].route} />
          <PageTitle
            title={completeRegisterUserConfig[0].title}
            icon={completeRegisterUserConfig[0].icon}
            description={completeRegisterUserConfig[0].description}
          />
        </Stack>
        <Assisted steps={stepsRegisterUserConfig}></Assisted>
      </Stack>
    </StyledContainer>
  );
}

export { CompleteRegisterUI };
