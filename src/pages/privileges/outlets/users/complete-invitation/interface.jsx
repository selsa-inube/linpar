import { Breadcrumbs, Stack } from "@inube/design-system";
import { PageTitle } from "@components/PageTitle";
import { StyledContainer } from "./styles";
import { Assisted } from "@components/feedback/Assisted";
import { SubjectCard } from "@components/cards/SubjectCard";
import { useMediaQuery } from "@inube/design-system";
import {
  stepsRegisterUserConfig,
  CompleteInvitationUserConfig,
} from "./config/completeInvitation.config";

function CompleteInvitationUI(props) {
  const { invitation } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const invitationCardData = {
    nombre: invitation.username,
    identificación: invitation.userID,
    correo: invitation.mail,
    invitación: invitation.invitationDate,
  };

  return (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={CompleteInvitationUserConfig[0].route} />
          <Stack justifyContent="space-between" alignItems="center" gap="50px">
            <PageTitle
              title={CompleteInvitationUserConfig[0].title}
              icon={CompleteInvitationUserConfig[0].icon}
              description={CompleteInvitationUserConfig[0].description}
            />
            <SubjectCard
              subjectData={invitationCardData}
              title="Informacion del usuario"
            />
          </Stack>
        </Stack>
        <Assisted steps={stepsRegisterUserConfig} />
      </Stack>
    </StyledContainer>
  );
}

export { CompleteInvitationUI };
