import { Stack, Tabs, useMediaQueries, inube } from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";

import { InitializerForm } from "@pages/privileges/outlets/forms/InitializerForm";
import { PageTitle } from "@components/PageTitle";

import { StyledContainer } from "./styles";
import { stepsAddingLinixUseCase } from "../../adding-linix-use-case/config/addingLinixUseCase.config";
import {
  IAssignmentFormEntry,
  IFormsInvitation,
  IGeneralInformationEntry,
} from "../../../users/types/forms.types";
import { GeneralInformationForm } from "../../adding-linix-use-case/forms/GeneralInformationForm";
import { ClientServerButtonSelection } from "../../adding-linix-use-case/forms/ClientServerButtonSelection";
import { ItemNotFound } from "@src/components/layout/ItemNotFound";

interface EditUserUIProps {
  selectedTab: string;
  handleTabChange: (tabId: string) => void;
  editData: IFormsInvitation;
  handleSubmit: (
    values: IGeneralInformationEntry | IAssignmentFormEntry[]
  ) => void;
  controlModal: {
    show: boolean;
    continueTab: string;
  };
  handleCloseModal: () => void;
  handleDataChange: (hasChanges: boolean) => void;
  handleContinueTab: () => void;
  downloadableDocuments: IAssignmentFormEntry[];
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

            {/* <SubjectCard
              subjectData={controlModal.continueTab}
              title="Informacion del usuario"
              icon={<MdPersonOutline size={24} />}
            /> */}
          </Stack>
        </Stack>
        <Stack gap="32px" direction="column">
          <Tabs
            tabs={Object.values(stepsAddingLinixUseCase)}
            selectedTab={selectedTab}
            type={typeTabs ? "select" : "tabs"}
            onChange={handleTabChange}
          />
          {selectedTab ===
            stepsAddingLinixUseCase.generalInformation.id.toString() && (
            <GeneralInformationForm
              initialValues={currentInformation}
              handleSubmit={handleSubmit}
              withSubmitButtons
              onHasChanges={handleDataChange}
            />
          )}
          {selectedTab ===
            stepsAddingLinixUseCase.clientServerButton.id.toString() && (
            <ClientServerButtonSelection
              initialValues={currentInformation}
              handleSubmit={handleSubmit}
              withSubmitButtons
              onHasChanges={handleDataChange}
            />
          )}
          {selectedTab ===
            stepsAddingLinixUseCase.downloadableDocuments.id.toString() && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={downloadableDocuments}
              handleSubmit={handleSubmit}
            />
          )}
          {selectedTab === stepsAddingLinixUseCase.webReports.id.toString() && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={webReports}
              handleSubmit={handleSubmit}
            />
          )}

          {selectedTab === stepsAddingLinixUseCase.webOptions.id.toString() && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={webOptions}
              handleSubmit={handleSubmit}
            />
          )}
          {selectedTab ===
            stepsAddingLinixUseCase.clientServerReports.id.toString() && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={clientServerReports}
              handleSubmit={handleSubmit}
            />
          )}

          {selectedTab ===
            stepsAddingLinixUseCase.clientServerOptions.id.toString() && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={clientServerOptions}
              handleSubmit={handleSubmit}
            />
          )}

          {selectedTab === stepsAddingLinixUseCase.summary.id.toString() && (
            <ItemNotFound
              image={ItemNotFound}
              title={"Página de resumen"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
        </Stack>
      </Stack>
      {controlModal.show && continueModal(handleCloseModal, handleContinueTab)}
    </StyledContainer>
  );
}

export { EditUserUI };
