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
import {
  GeneralInformationForm,
  IGeneralInformationEntry,
} from "../add-position/forms/GeneralInformationForm";
import {
  editPositionConfig,
  editPositionTabsConfig,
} from "./config/editPosition.config";
import { IFormAddPosition } from "../add-position/types";
import { IControlModal } from "./types";

interface EditPositionUIProps {
  selectedTab: string;
  dataEditPositionForm: IFormAddPosition;
  editData: { [key: string]: { [key: string]: unknown } };
  controlModal: IControlModal;
  handleTabChange: (tabId: string) => void;
  handleSubmit: (values: IAssignmentFormEntry[]) => void;
  handleCloseModal: () => void;
  handleDataChange: (hasChanges: boolean) => void;
  handleContinueTab: () => void;
}

export function EditPositionUI(props: EditPositionUIProps) {
  const {
    selectedTab,
    dataEditPositionForm,
    controlModal,
    editData,
    handleTabChange,
    handleSubmit,
    handleCloseModal,
    handleDataChange,
    handleContinueTab,
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
          <Breadcrumbs crumbs={editPositionConfig[0].crumbs} />
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
            tabs={Object.values(editPositionTabsConfig)}
            selectedTab={selectedTab}
            type={typeTabs ? "select" : "tabs"}
            onChange={handleTabChange}
          />
          {selectedTab === editPositionTabsConfig.generalInformation.id && (
            <GeneralInformationForm
              initialValues={currentInformation as IGeneralInformationEntry}
              withSubmitButtons
              onHasChanges={handleDataChange}
            />
          )}
          {selectedTab === editPositionTabsConfig.roles.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={dataEditPositionForm.roles.values}
              handleSubmit={handleSubmit}
            />
          )}
        </Stack>
      </Stack>

      {controlModal.show && (
        <DecisionModal
          loading={false}
          closeModal={handleCloseModal}
          handleClick={handleContinueTab}
          title="Continuar sin guardar"
          description="¿Seguro que desea salir? cualquier cambio no guardado se perderá"
          actionText="Continuar"
          appearance="error"
        />
      )}
    </StyledContainer>
  );
}
