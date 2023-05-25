import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inube/design-system";
import { PageTitle } from "../../../../../components/PageTitle";
import {
  stepsRegisterUserConfig,
  completeRegisterUserConfig,
} from "./config/completeRegister.config";
import { StyledContainer } from "./styles";
import { Assisted } from "../../../../../components/feedback/Assisted";
import { SubjectCard } from "../../../../../components/cards/SubjectCard";
import { invitationEntriesDataMock } from "../../../../../mocks/apps/privileges/invitations.mock";

function CompleteRegisterUI(props) {
  const { id } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const foundEntry = invitationEntriesDataMock.find((entry) => entry.id == id);

  const subjectCardData = {
    Nombre: foundEntry.username,
    Identificación: foundEntry.userID,
    Correo: foundEntry.mail,
    Invitación: foundEntry.invitationDate,
  };

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
            ></SubjectCard>
          </Stack>
        </Stack>
        <Assisted steps={stepsRegisterUserConfig}></Assisted>
      </Stack>
    </StyledContainer>
  );
}

export { CompleteRegisterUI };
