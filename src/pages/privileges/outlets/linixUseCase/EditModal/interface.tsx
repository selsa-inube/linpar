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

import { StyledContainer } from "./styles";
import { editLinixUseCaseTabsConfig } from "./config/editUseCaseTabs.config";
import { editLinixUseCaseConfig } from "./config/editLinuxUseCase.config";

import {
  IFormAddLinixUseCase,
  IGeneralInformation,
} from "../adding-linix-use-case/types";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { ClientServerButtonSelection } from "../components/ClientServerButtonSelection";

interface IControlModal {
  show: boolean;
  continueTab: string;
}
interface EditUserUIProps {
  selectedTab: string;
  formData: IFormAddLinixUseCase;
  handleTabChange: (tabId: string) => void;
  editData: { [key: string]: { [key: string]: unknown } };
  handleSubmit: (values: IAssignmentFormEntry[]) => void;
  controlModal: IControlModal;
  handleCloseModal: () => void;
  handleDataChange: (hasChanges: boolean) => void;
  handleContinueTab: () => void;
  webOptions: Record<string, unknown>[];
  csOptions: Record<string, unknown>[];
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
    handleTabChange,
    handleSubmit,
    controlModal,
    handleCloseModal,
    handleDataChange,
    handleContinueTab,
    formData,
    csOptions,
    webOptions,
  } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);
  const {
    generalInformation: { entries: currentInformation },
  } = editData;

  return (
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
              title="Editar un caso de uso"
              navigatePage="/privileges/linixUseCase"
              description="describir la nueva informacion de caso de uso"
            />
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
              initialValues={currentInformation as IGeneralInformation}
              csOptions={csOptions}
              webOptions={webOptions}
              handleSubmit={handleSubmit as () => void}
              withSubmitButtons
              onHasChanges={handleDataChange}
            />
          )}
          {selectedTab === editLinixUseCaseTabsConfig.clientServerButton.id && (
            <ClientServerButtonSelection
              initialValues={formData.clientServerButton.values}
              handleSubmit={handleSubmit as () => void}
              withSubmitButtons
              onHasChanges={handleDataChange}
              csSelected={formData.generalInformation.values.k_Opcion}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.downloadableDocuments.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.downloadableDocuments.values}
              handleSubmit={handleSubmit}
            />
          )}
          {selectedTab === editLinixUseCaseTabsConfig.webReports.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.webReports.values}
              handleSubmit={handleSubmit}
            />
          )}

          {selectedTab === editLinixUseCaseTabsConfig.webOptions.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.webOptions.values}
              handleSubmit={handleSubmit}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.clientServerReports.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.clientServerReports.values}
              handleSubmit={handleSubmit}
            />
          )}

          {selectedTab ===
            editLinixUseCaseTabsConfig.clientServerOptions.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.clientServerReports.values}
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
