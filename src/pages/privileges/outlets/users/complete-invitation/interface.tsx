import { PageTitle } from "@components/PageTitle";
import { SubjectCard } from "@components/cards/SubjectCard";
import { Assisted } from "@components/feedback/Assisted";
import { ItemNotFound } from "@components/layout/ItemNotFound";
import { Breadcrumbs, Stack, useMediaQuery } from "@inube/design-system";
import { AidBudgetsForm } from "../edit-user/forms/AidBudgetsForm";
import { BranchesForm } from "../edit-user/forms/BranchesForm";
import { EventsForm } from "../edit-user/forms/EventsForm";
import { GeneralInformationForm } from "../edit-user/forms/GeneralInfoForm";
import { PayrollsForm } from "../edit-user/forms/PayrollsForm";
import { ProjectsForm } from "../edit-user/forms/ProjectsForm";
import {
  CompleteInvitationUserConfig,
  stepsRegisterUserConfig,
  completeInvitationSubjectCardLabels,
} from "./config/completeInvitation.config";
import { invitationNotFoundConfig } from "./config/invitationNotFound.config";
import { StyledContainer } from "./styles";
import { MdPersonOutline } from "react-icons/md";
import {
  IFormsInvitation,
  IAssignmentFormEntry,
  IGeneralInformationEntry,
} from "../types/forms.types";

interface CompleteInvitationUIProps {
  invitationData: IFormsInvitation;
  handleSubmit: (
    values: IGeneralInformationEntry | IAssignmentFormEntry[]
  ) => void;
  handleStepChange: (step: number) => void;
  currentStep: number;
}

function CompleteInvitationUI(props: CompleteInvitationUIProps) {
  const { invitationData, handleSubmit, handleStepChange, currentStep } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const {
    generalInformation: { entries: currentInformation },
  } = invitationData;

  const invitationCardData = currentInformation
    ? {
        username: currentInformation.username,
        userID: currentInformation.userID,
        email: currentInformation.email,
        invitationDate: currentInformation.invitationDate || "",
      }
    : {
        username: "",
        userID: "",
        email: "",
        invitationDate: "",
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
              navigatePage="/privileges/users"
            />
            {currentInformation && invitationCardData && (
              <SubjectCard
                subjectData={invitationCardData}
                title="Informacion del usuario"
                icon={<MdPersonOutline size={24} />}
                labels={completeInvitationSubjectCardLabels}
              />
            )}
          </Stack>
        </Stack>
        {currentInformation ? (
          <>
            <Assisted
              steps={Object.values(stepsRegisterUserConfig)}
              handleStepChange={handleStepChange}
              currentStep={currentStep}
            />
            {currentStep === stepsRegisterUserConfig.generalInformation.id && (
              <GeneralInformationForm
                currentInformation={currentInformation}
                handleSubmit={handleSubmit}
              />
            )}
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
            {currentStep === stepsRegisterUserConfig.payrolls.id && (
              <PayrollsForm
                currentPayrolls={invitationData.payrolls.entries}
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
