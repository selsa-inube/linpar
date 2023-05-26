import { Breadcrumbs, Stack } from "@inube/design-system";
import { PageTitle } from "../../../../../components/PageTitle";
import { StyledContainer } from "./styles";
import { Assisted } from "../../../../../components/feedback/Assisted";
import { SubjectCard } from "../../../../../components/cards/SubjectCard";
import {
  stepsRegisterUserConfig,
  completeRegisterUserConfig,
} from "./config/completeRegister.config";

function CompleteRegisterUI(props) {
  const { smallScreen, subjectCardData } = props;

  return (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={completeRegisterUserConfig[0].route} />
          <Stack justifyContent="space-between" alignItems="center" gap="49px">
            <PageTitle
              title={completeRegisterUserConfig[0].title}
              icon={completeRegisterUserConfig[0].icon}
              description={completeRegisterUserConfig[0].description}
            />
            <SubjectCard
              subjectData={subjectCardData}
              title="Informacion del usuario"
            />
          </Stack>
        </Stack>
        <Assisted steps={stepsRegisterUserConfig} />
      </Stack>
    </StyledContainer>
  );
}

export { CompleteRegisterUI };
