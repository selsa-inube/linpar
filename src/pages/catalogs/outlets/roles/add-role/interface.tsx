import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Assisted,
  Breadcrumbs,
  Button,
  useMediaQuery,
  inube,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import { InitializerForm } from "@pages/privileges/outlets/forms/InitializerForm";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { LinparContext } from "@context/AppContext";
import {
  IFormAddRole,
  IFormAddRoleRef,
  IInitialiceFormRole,
  IStep,
} from "../types";
import { titleButtonTextAssited } from "./types";
import { StyledContainerAssisted } from "./styles";
import {
  createRolConfig,
  stepsAddRol,
  finishAssistedRoleModalConfig,
  finishAssistedRoleMessagesConfig,
} from "./config/addRol.config";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { AncillaryAccountsForm } from "../components/AncillaryAccountsForm";
import { VerificationAddRole } from "../components/VerificationForm";
import { saveRole } from "./utils";
import { Stack } from "@inubekit/stack";

interface AddRolUIProps {
  addRoleFormValid: IFormAddRole;
  currentStep: number;
  formReferences: IFormAddRoleRef;
  steps: IStep[];
  isAddRoleFormValid?: boolean;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleFinishAssisted?: () => void;
  handleUpdateDataSwitchstep: (values: IInitialiceFormRole[]) => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleAddRoleFormValid: (newValue: boolean) => void;
  loading: boolean;
  linixRoles: Record<string, unknown>[];
}

export function AddRolUI(props: AddRolUIProps) {
  const {
    linixRoles,
    loading,
    addRoleFormValid,
    currentStep,
    formReferences,
    steps,
    isAddRoleFormValid,
    handleNextStep,
    handlePreviousStep,
    handleUpdateDataSwitchstep,
    setCurrentStep,
    handleAddRoleFormValid,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const navigate = useNavigate();
  const { linparData } = useContext(LinparContext);
  const smallScreen = useMediaQuery("(max-width: 580px)");

  const {
    generalInformation: { values: generalInformationValues },
    ancillaryAccounts: { values: ancillaryAccountsValues },
    transactionTypes: { values: transactionTypesValues },
    businessRules: { values: businessRulesValues },
    useCases: { values: useCasesValues },
  } = addRoleFormValid;

  const { title, description, actionText, appearance } =
    finishAssistedRoleModalConfig;

  const handleAddRole = async (addRoleData: IFormAddRole) => {
    await saveRole(addRoleData, linparData.businessUnit.businessUnitPublicCode)
      .then(() => {
        renderMessage(generalInformationValues.n_Rol, "success");
      })
      .catch((error) => {
        renderMessage("", "failed");
      })
      .finally(() => {
        handleToggleModal();
      });
  };

  const renderMessage = (
    n_Rol: string | "",
    type: "success" | "failed" = "failed"
  ) => {
    let messageType;
    if (type === "success")
      messageType = finishAssistedRoleMessagesConfig.success;
    if (type === "failed")
      messageType = finishAssistedRoleMessagesConfig.failed;

    messageType &&
      setMessage({
        visible: true,
        data: {
          icon: messageType?.icon,
          title: messageType?.title,
          description: messageType.description(n_Rol),
          appearance: messageType?.appearance,
        },
      });
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
    navigate("/catalogs/roles");
  };
  return (
    <>
      {loading ? (
        <LoadingApp />
      ) : (
        <Stack direction="column" padding={smallScreen ? "16px" : "32px 64px"}>
          <Stack gap={inube.spacing.s600} direction="column">
            <Stack gap={inube.spacing.s400} direction="column">
              <Breadcrumbs crumbs={createRolConfig[0].crumbs} />
              <Stack
                justifyContent="space-between"
                alignItems="center"
                gap={inube.spacing.s650}
              >
                <PageTitle
                  title={createRolConfig[0].title}
                  description={createRolConfig[0].description}
                  navigatePage="/catalogs/roles"
                />
              </Stack>
            </Stack>
            <>
              <StyledContainerAssisted $cursorDisabled={!isAddRoleFormValid}>
                <Assisted
                  steps={steps}
                  currentStepId={currentStep}
                  handlePrev={handlePreviousStep}
                  handleNext={
                    currentStep === steps.length
                      ? handleToggleModal
                      : handleNextStep
                  }
                  titleButtonText={titleButtonTextAssited}
                />
              </StyledContainerAssisted>

              {currentStep === stepsAddRol.generalInformation.id && (
                <GeneralInformationForm
                  initialValues={generalInformationValues}
                  linixRoles={linixRoles}
                  ref={formReferences.generalInformation}
                  handleAddRoleFormValid={handleAddRoleFormValid}
                  currentStep={currentStep}
                />
              )}

              {currentStep === stepsAddRol.ancillaryAccounts.id && (
                <AncillaryAccountsForm
                  initialValues={ancillaryAccountsValues}
                  ref={formReferences.ancillaryAccounts}
                  handleAddRoleFormValid={handleAddRoleFormValid}
                />
              )}
              {currentStep === stepsAddRol.transactionTypes.id && (
                <InitializerForm
                  dataOptionsForms={transactionTypesValues}
                  handleSubmit={handleUpdateDataSwitchstep}
                />
              )}
              {currentStep === stepsAddRol.businessRules.id && (
                <InitializerForm
                  dataOptionsForms={businessRulesValues}
                  handleSubmit={handleUpdateDataSwitchstep}
                />
              )}
              {currentStep === stepsAddRol.useCases.id && (
                <InitializerForm
                  dataOptionsForms={useCasesValues}
                  handleSubmit={handleUpdateDataSwitchstep}
                />
              )}

              {currentStep === stepsAddRol.summary.id && (
                <VerificationAddRole
                  steps={addRoleFormValid}
                  setCurrentStep={setCurrentStep}
                />
              )}
            </>
            <Stack gap="16px" justifyContent="flex-end">
              <Button
                onClick={handlePreviousStep}
                type="button"
                disabled={currentStep === steps[0].id}
                spacing="wide"
                variant="none"
                appearance="gray"
              >
                Atrás
              </Button>

              <Button
                onClick={
                  currentStep === steps.length
                    ? handleToggleModal
                    : handleNextStep
                }
                spacing="wide"
                disabled={!isAddRoleFormValid}
              >
                {currentStep === steps.length ? "Enviar" : "Siguiente"}
              </Button>
              {showModal && (
                <DecisionModal
                  title={title}
                  description={description}
                  actionText={actionText}
                  appearance={appearance}
                  closeModal={handleToggleModal}
                  handleClick={() => handleAddRole(addRoleFormValid)}
                />
              )}
            </Stack>
          </Stack>
          {message.visible && (
            <RenderMessage
              message={message}
              handleCloseMessage={handleCloseSectionMessage}
              onMessageClosed={handleCloseSectionMessage}
            />
          )}
        </Stack>
      )}
    </>
  );
}
