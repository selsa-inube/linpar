import { PageTitle } from "@components/PageTitle";
import { SubjectCard } from "@components/cards/SubjectCard";
import { ItemNotFound } from "@components/layout/ItemNotFound";
import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inube/design-system";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { EditUserContinueModalConfig } from "./config/editUser.config";
import { editUserOptionsConfig } from "./config/editUser.config";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { userNotFoundConfig } from "./config/itemNotFound.config";
import { GeneralInformationForm } from "./forms/GeneralInfoForm";
import { AidBudgetsForm } from "./forms/AidBudgetsForm";
import { EventsForm } from "./forms/EventsForm";
import { PayrollsForm } from "./forms/PayrollsForm";
import { ProjectsForm } from "./forms/ProjectsForm";
import { BranchesForm } from "./forms/BranchesForm";
import { StyledContainer } from "./styles";

function continueModal(handleCloseModal, HandleContinueTab) {
  const { title, description, actionText, appearance } =
    EditUserContinueModalConfig;
  return (
    <DecisionModal
      title={title}
      description={description}
      actionText={actionText}
      appearance={appearance}
      closeModal={handleCloseModal}
      handleClick={HandleContinueTab}
    />
  );
}

function EditUserUI(props) {
  const {
    selectedTab,
    handleTabChange,
    editData,
    handleSubmit,
    controlModal,
    handleCloseModal,
    handleDataChange,
    HandleContinueTab,
    validateDataReset,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const {
    generalInformation: { entries: currentInformation },
  } = editData;

  const userCardData = currentInformation && {
    nombre: currentInformation.username,
    identificación: currentInformation.userID,
    codigo: currentInformation.code,
    rol: currentInformation.position,
  };

  return (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={editUserOptionsConfig.editUserPage.url} />
          <Stack justifyContent="space-between" alignItems="center" gap="49px">
            <PageTitle
              title={editUserOptionsConfig.editUserPage.label}
              description={editUserOptionsConfig.editUserPage.description}
            />
            {currentInformation && (
              <SubjectCard
                subjectData={userCardData}
                title="Informacion del usuario"
              />
            )}
          </Stack>
        </Stack>
        {currentInformation ? (
          <Stack gap="32px" direction="column">
            <Tabs
              tabs={Object.values(editUserTabsConfig)}
              selectedTab={selectedTab}
              handleSelectedTab={handleTabChange}
            />
            {selectedTab === editUserTabsConfig.generalInformation.id && (
              <GeneralInformationForm
                currentInformation={editData.generalInformation.entries}
                handleSubmit={handleSubmit}
                withSubmitButtons
                onHasChanges={handleDataChange}
                validateDataReset={validateDataReset}
              />
            )}
            {selectedTab === editUserTabsConfig.branches.id && (
              <BranchesForm
                currentBranches={editData.branches.entries}
                handleSubmit={handleSubmit}
                withSubmitButtons
                onHasChanges={handleDataChange}
                validateDataReset={validateDataReset}
              />
            )}
            {selectedTab === editUserTabsConfig.events.id && (
              <EventsForm
                currentEvents={editData.events.entries}
                handleSubmit={handleSubmit}
                withSubmitButtons
                onHasChanges={handleDataChange}
                validateDataReset={validateDataReset}
              />
            )}
            {selectedTab === editUserTabsConfig.projects.id && (
              <ProjectsForm
                currentProjects={editData.projects.entries}
                handleSubmit={handleSubmit}
                withSubmitButtons
                onHasChanges={handleDataChange}
                validateDataReset={validateDataReset}
              />
            )}
            {selectedTab === editUserTabsConfig.aidBudgetUnits.id && (
              <AidBudgetsForm
                currentAidBudgetUnits={editData.aidBudgetUnits.entries}
                handleSubmit={handleSubmit}
                withSubmitButtons
                onHasChanges={handleDataChange}
                validateDataReset={validateDataReset}
              />
            )}
            {selectedTab === editUserTabsConfig.payrolls.id && (
              <PayrollsForm
                currentPayrolls={editData.payrolls.entries}
                handleSubmit={handleSubmit}
                withSubmitButtons
                onHasChanges={handleDataChange}
                validateDataReset={validateDataReset}
              />
            )}
          </Stack>
        ) : (
          <ItemNotFound
            image={userNotFoundConfig.image}
            title={userNotFoundConfig.title}
            description={userNotFoundConfig.description}
            buttonDescription={userNotFoundConfig.buttonDescription}
            route={userNotFoundConfig.route}
          />
        )}
      </Stack>
      {controlModal.show && continueModal(handleCloseModal, HandleContinueTab)}
    </StyledContainer>
  );
}

export { EditUserUI };
