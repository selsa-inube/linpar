import { TfiMenuAlt } from "react-icons/tfi";
import {
  Stack,
  Tabs,
  useMediaQueries,
  inube,
  Breadcrumbs,
} from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { InitializerForm } from "@pages/privileges/outlets/forms/InitializerForm";
import { PageTitle } from "@components/PageTitle";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";

import { SubjectCard } from "@src/components/cards/SubjectCard";

import { StyledContainer } from "./styles";
import { editLinixUseCaseTabsConfig } from "./config/editUseCaseTabs.config";
import {
  editLinixUseCaseConfig,
  editLinixUseCaseSubjectCardLabels,
} from "./config/editLinuxUseCase.config";

import {
  GeneralInformationForm,
  IGeneralInformationEntryyyyy,
} from "../GeneralInfoForm";
import { IFormAddUsers } from "@src/services/users/users.types";
import { LoadingApp } from "@src/pages/login/outlets/LoadingApp";

interface IControlModal {
  show: boolean;
  continueTab: string;
}
interface EditUserUIProps {
  selectedTab: string;
  loading: boolean;
  formData: IFormAddUsers;
  id: string;
  handleTabChange: (tabId: string) => void;
  editData: { [key: string]: { [key: string]: unknown } };
  handleSubmit: (values: IAssignmentFormEntry[]) => void;
  controlModal: IControlModal;
  handleCloseModal: () => void;
  handleDataChange: (hasChanges: boolean) => void;
  handleContinueTab: () => void;
}

function continueModal(
  handleCloseModal: () => void,
  handleContinueTab: () => void
) {
  return (
    <DecisionModal
      loading={false}
      closeModal={handleCloseModal}
      handleClick={handleContinueTab}
      title="Continuar sin guardar"
      description="¿Seguro que desea salir? cualquier cambio no guardado se perderá"
      actionText="Continuar"
      appearance="error"
    />
  );
}

function EditUserUI(props: EditUserUIProps) {
  const {
    selectedTab,
    editData,
    loading,
    id,
    handleTabChange,
    handleSubmit,
    controlModal,
    handleCloseModal,
    handleDataChange,
    handleContinueTab,
    formData,
  } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);
  const {
    generalInformation: { entries: currentInformation },
  } = editData;

  const userCardData = currentInformation && {
    username: (currentInformation as { k_Usuari: string }).k_Usuari,
  };

  return loading ? (
    <LoadingApp />
  ) : (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap={inube.spacing.s600} direction="column">
        <Stack gap={inube.spacing.s200} direction="column">
          <Breadcrumbs crumbs={editLinixUseCaseConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={inube.spacing.s400}
          >
            <PageTitle
              title="Edicion de usuario"
              navigatePage="/privileges/users"
              description="describir la nueva informacion de caso de uso"
            />

            {currentInformation && userCardData && (
              <SubjectCard
                subjectData={userCardData}
                title="Informacion del caso de uso"
                icon={<TfiMenuAlt size={24} />}
                labels={editLinixUseCaseSubjectCardLabels}
              />
            )}
          </Stack>
        </Stack>
        <Stack gap={inube.spacing.s400} direction="column">
          <Tabs
            tabs={Object.values(editLinixUseCaseTabsConfig)}
            selectedTab={selectedTab}
            type={typeTabs ? "select" : "tabs"}
            onChange={handleTabChange}
          />
          {selectedTab === editLinixUseCaseTabsConfig.generalInformation.id && (
            <GeneralInformationForm
              initialValues={currentInformation as IGeneralInformationEntryyyyy}
              handleSubmit={handleSubmit as () => void}
              withSubmitButtons
              onHasChanges={handleDataChange}
              id={id}
            />
          )}
          {selectedTab === editLinixUseCaseTabsConfig.branches.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.branches.values}
              handleSubmit={handleSubmit}
            />
          )}
        </Stack>
      </Stack>

      {controlModal.show && continueModal(handleCloseModal, handleContinueTab)}
    </StyledContainer>
  );
}

export { EditUserUI };
