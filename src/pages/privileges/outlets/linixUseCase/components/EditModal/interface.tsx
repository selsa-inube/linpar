import { Stack, Tabs, useMediaQueries, inube } from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { InitializerForm } from "@pages/privileges/outlets/forms/InitializerForm";
import { PageTitle } from "@components/PageTitle";
import { webOptionsMock } from "@src/mocks/privileges/web/webOptionsMock.mock";
import { clientServerMock } from "@src/mocks/privileges/client-server/client-serverServiceMock.mock";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";
import { GeneralInformationForm } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/forms/GeneralInformationForm";
import { ClientServerButtonSelection } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/forms/ClientServerButtonSelection";

import { StyledContainer } from "./styles";
import { editLinixUseCaseTabsConfig } from "./config/editUseCaseTabs.config";

import {
  IClientServerButton,
  IGeneralInformation,
} from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/index";
interface IControlModal {
  show: boolean;
  continueTab: string;
}
interface EditUserUIProps {
  selectedTab: string;
  handleTabChange: (tabId: string) => void;
  editData: { [key: string]: { [key: string]: unknown } };
  handleSubmit: (values: IAssignmentFormEntry[]) => void;
  controlModal: IControlModal;
  handleCloseModal: () => void;
  handleDataChange: (hasChanges: boolean) => void;
  handleContinueTab: () => void;
  message: IMessageState;
  downloadableDocuments: IAssignmentFormEntry[];
  csOptions: Record<string, unknown>[];
  webReports: IAssignmentFormEntry[];
  clientServerReports: IAssignmentFormEntry[];
  clientServerOptions: IAssignmentFormEntry[];
  webOptions: IAssignmentFormEntry[];
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
    webReports,
    clientServerOptions,
    webOptions,
    clientServerReports,
    downloadableDocuments,
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
        <Stack gap="32px" direction="column">
          <Tabs
            tabs={Object.values(editLinixUseCaseTabsConfig)}
            selectedTab={selectedTab}
            type={typeTabs ? "select" : "tabs"}
            onChange={handleTabChange}
          />
          {selectedTab ===
            editLinixUseCaseTabsConfig.generalInformation.id.toString() && (
            <GeneralInformationForm
              initialValues={currentInformation as IGeneralInformation}
              csOptions={clientServerMock}
              webOptions={webOptionsMock}
              handleSubmit={handleSubmit as () => void}
              withSubmitButtons
              onHasChanges={handleDataChange}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.clientServerButton.id.toString() && (
            <ClientServerButtonSelection
              initialValues={currentInformation as IClientServerButton}
              handleSubmit={handleSubmit as () => void}
              withSubmitButtons
              onHasChanges={handleDataChange}
              csSelected={""}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.downloadableDocuments.id.toString() && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={downloadableDocuments}
              handleSubmit={handleSubmit}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.webReports.id.toString() && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={webReports}
              handleSubmit={handleSubmit}
            />
          )}

          {selectedTab ===
            editLinixUseCaseTabsConfig.webOptions.id.toString() && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={webOptions}
              handleSubmit={handleSubmit}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.clientServerReports.id.toString() && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={clientServerReports}
              handleSubmit={handleSubmit}
            />
          )}

          {selectedTab ===
            editLinixUseCaseTabsConfig.clientServerOptions.id.toString() && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={clientServerOptions}
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
