import {
  Assisted,
  Breadcrumbs,
  Stack,
  useMediaQuery,
  inube,
} from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { PageTitle } from "@components/PageTitle";
import { ItemNotFound } from "@components/layout/ItemNotFound";
import itemNotFound from "@src/assets/images/ItemNotFound.png";

import {
  CrateLinixUseCaseConfig,
  finishAssistedModalConfig,
  stepsAddingLinixUseCase,
} from "./config/addingLinixUseCase.config";
import { StyledAssistedContainer } from "./styles";
import { GeneralInformationForm } from "./forms/GeneralInformationForm";
import { ClientServerButtonSelection } from "./forms/ClientServerButtonSelection";
import { FormButtons } from "@src/components/forms/submit/FormButtons";
import { IFormAddLinixUseCase, IHandleChangeFormData } from "./index";
import { InitializerForm } from "./forms/DownloadableFormats";

function finishModal(
  handleCloseModal: () => void,
  handleCompleteInvitation: () => void
) {
  const { title, description, actionText, appearance } =
    finishAssistedModalConfig;

  return (
    <DecisionModal
      title={title}
      description={description}
      actionText={actionText}
      loading={false}
      appearance={appearance}
      closeModal={handleCloseModal}
      handleClick={handleCompleteInvitation}
    />
  );
}

interface AddingLinixUseCaseUIProps {
  handleNextStep: (step: number) => void;
  handlePrevStep: (step: number) => void;
  currentStep: number;
  handleCompleteInvitation: () => void;
  handleToggleModal: () => void;
  showModal: boolean;
  formData: IFormAddLinixUseCase;
  handleUpdateFormData: (values: IHandleChangeFormData) => void;
  csOptions: Record<string, unknown>[];
  webOptions: Record<string, unknown>[];
  documents: Record<string, unknown>[];
}

function AddingLinixUseCaseUI(props: AddingLinixUseCaseUIProps) {
  const {
    currentStep,
    handleCompleteInvitation,
    handleToggleModal,
    showModal,
    handlePrevStep,
    handleNextStep,
    formData,
    handleUpdateFormData,
    csOptions,
    webOptions,
    documents,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const isCurrentStateValid = () => {
    if (currentStep === Object.values(stepsAddingLinixUseCase).length) {
      handleToggleModal();
    } else {
      handleNextStep(currentStep);
    }
  };
  const isPreviousStepAvailable = () => {
    return currentStep !== 1 ? (handlePrevStep(currentStep), true) : false;
  };

  const dataOptionsForms = documents.map((document) => ({
    value: String(document.NOMBRE),
    isActive: Boolean(document.isActive),
    id: String(document.CODIGO),
  }));

  return (
    <Stack direction="column" padding={smallScreen ? "s200" : "s400 s800"}>
      <Stack gap={inube.spacing.s600} direction="column">
        <Stack gap={inube.spacing.s400} direction="column">
          <Breadcrumbs crumbs={CrateLinixUseCaseConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={inube.spacing.s650}
          >
            <PageTitle
              title={CrateLinixUseCaseConfig[0].title}
              description={CrateLinixUseCaseConfig[0].description}
              navigatePage="/privileges/linixUseCase"
            />
          </Stack>
        </Stack>
        <>
          <StyledAssistedContainer>
            <Assisted
              steps={Object.values(stepsAddingLinixUseCase)}
              currentStepId={currentStep}
              handlePrev={handlePrevStep}
              handleNext={
                currentStep === Object.values(stepsAddingLinixUseCase).length
                  ? handleToggleModal
                  : handleNextStep
              }
            />
          </StyledAssistedContainer>
          <FormButtons
            handleSubmit={isCurrentStateValid}
            handleReset={isPreviousStepAvailable}
            cancelButtonText="Atrás"
            submitButtonText="Siguiente"
            disableReset={currentStep === 1}
          >
            {currentStep === stepsAddingLinixUseCase.generalInformation.id && (
              <GeneralInformationForm
                csOptions={csOptions}
                webOptions={webOptions}
                handleSubmit={handleUpdateFormData}
                initialValues={formData.generalInformation.values}
              />
            )}
            {currentStep === stepsAddingLinixUseCase.clientServerButton.id && (
              <ClientServerButtonSelection
                csSelected={formData.generalInformation.values.k_Opcion}
                handleSubmit={handleUpdateFormData}
                initialValues={formData.clientServerButton.values}
              />
            )}
            {currentStep ===
              stepsAddingLinixUseCase.downloadableDocuments.id && (
              <InitializerForm
                dataOptionsForms={dataOptionsForms}
                handleSubmit={handleUpdateFormData as any}
                initialValues={formData.downloadableDocuments.values}
              />
            )}
            {currentStep === stepsAddingLinixUseCase.webReports.id && (
              <ItemNotFound
                image={itemNotFound}
                title={"Reportes web"}
                description={"Esta sección está en construcción."}
                buttonDescription={"Retorna a la página de inicio"}
                route={"/privileges/linixUseCase"}
              />
            )}
            {currentStep === stepsAddingLinixUseCase.webOptions.id && (
              <ItemNotFound
                image={itemNotFound}
                title={"Opciones web"}
                description={"Esta sección está en construcción."}
                buttonDescription={"Retorna a la página de inicio"}
                route={"/privileges/linixUseCase"}
              />
            )}
            {currentStep === stepsAddingLinixUseCase.clientServerReports.id && (
              <ItemNotFound
                image={itemNotFound}
                title={"Reportes cliente servidor"}
                description={"Esta sección está en construcción."}
                buttonDescription={"Retorna a la página de inicio"}
                route={"/privileges/linixUseCase"}
              />
            )}
            {currentStep === stepsAddingLinixUseCase.clientServerOptions.id && (
              <ItemNotFound
                image={itemNotFound}
                title={"Opciones cliente servidor"}
                description={"Esta sección está en construcción."}
                buttonDescription={"Retorna a la página de inicio"}
                route={"/privileges/linixUseCase"}
              />
            )}
            {currentStep === stepsAddingLinixUseCase.summary.id && (
              <ItemNotFound
                image={itemNotFound}
                title={"Página de resumen"}
                description={"Esta sección está en construcción."}
                buttonDescription={"Retorna a la página de inicio"}
                route={"/privileges/linixUseCase"}
              />
            )}
          </FormButtons>
        </>
      </Stack>
      {showModal && finishModal(handleToggleModal, handleCompleteInvitation)}
    </Stack>
  );
}

export { AddingLinixUseCaseUI };
