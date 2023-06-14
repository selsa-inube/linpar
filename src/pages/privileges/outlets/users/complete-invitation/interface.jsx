import { PageTitle } from "@components/PageTitle";
import { SubjectCard } from "@components/cards/SubjectCard";
import { ItemNotFound } from "@components/layout/ItemNotFound";
import { Breadcrumbs, Stack, useMediaQuery } from "@inube/design-system";
import { Assisted } from "@src/components/feedback/Assisted";
import { AidBudgetsForm } from "../edit-user/forms/AidBudgetsForm";
import { BranchesForm } from "../edit-user/forms/BranchesForm";
import {
  CompleteInvitationUserConfig,
  stepsRegisterUserConfig,
} from "./config/completeInvitation.config";
import { invitationNotFoundConfig } from "./config/invitationNotFound.config";
import { StyledContainer } from "./styles";

function CompleteInvitationUI(props) {
  const {
    invitationData,
    handleSubmit,
    handleStepChange,
    currentStep,
    invitation,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const invitationCardData = invitation && {
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
          <>
            <Assisted
              steps={Object.values(stepsRegisterUserConfig)}
              handleStepChange={handleStepChange}
              currentStep={currentStep}
            />
            {currentStep === stepsRegisterUserConfig.branches.id && (
              <BranchesForm
                currentBranches={invitationData.branches.entries}
                handleSubmit={handleSubmit}
              />
            )}

            {currentStep === stepsRegisterUserConfig.projects.id && (
              <ProjectsForm
                currentProjects={invitationData.projects.entries}
                handleSubmit={handleSubmit}
              />
            )}
            {currentStep === stepsRegisterUserConfig.events.id && (
              <EventsForm
                currentEvents={invitationData.events.entries}
                handleSubmit={handleSubmit}
              />
            )}
            {currentStep === stepsRegisterUserConfig.aidBudgetUnits.id && (
              <AidBudgetsForm
                currentAidBudgetUnits={invitationData.aidBudgetUnits.entries}
                handleSubmit={handleSubmit}
              />
            )}
          </>
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
