import { PageTitle } from "@components/PageTitle";
import { SubjectCard } from "@components/cards/SubjectCard";
import { Assisted } from "@components/feedback/Assisted";
import { ItemNotFound } from "@components/layout/ItemNotFound";
import { Breadcrumbs, Stack, useMediaQuery } from "@inube/design-system";
import {
  CompleteInvitationUserConfig,
  stepsRegisterUserConfig,
} from "./config/completeInvitation.config";
import { invitationNotFoundConfig } from "./config/invitationNotFound.config";
import { StyledContainer } from "./styles";

function CompleteInvitationUI(props) {
  const { invitation } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const invitationCardData = invitation
    ? {
        nombre: invitation.username,
        identificación: invitation.userID,
        correo: invitation.mail,
        invitación: invitation.invitationDate,
      }
    : null;

  return (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={CompleteInvitationUserConfig[0].route} />
          <Stack justifyContent="space-between" alignItems="center" gap="50px">
            <PageTitle
              title={CompleteInvitationUserConfig[0].title}
              description={CompleteInvitationUserConfig[0].description}
            />
            {invitation && (
              <SubjectCard
                subjectData={invitationCardData}
                title="Informacion del usuario"
              />
            )}
          </Stack>
        </Stack>
        {invitation ? (
          <Assisted steps={stepsRegisterUserConfig} />
        ) : (
          <ItemNotFound
            image={invitationNotFoundConfig.image}
            title={invitationNotFoundConfig.title}
            description={invitationNotFoundConfig.description}
            buttonDescription={invitationNotFoundConfig.buttonDescription}
            route={invitationNotFoundConfig.route}
          />
        )}
      </Stack>
    </StyledContainer>
  );
}

export { CompleteInvitationUI };
