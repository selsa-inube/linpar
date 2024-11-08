import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Assisted, inube } from "@inube/design-system";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";
import { PageTitle } from "@components/PageTitle";
import { InitializerForm } from "@pages/privileges/outlets/forms/InitializerForm";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { LinparContext } from "@context/AppContext";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Stack } from "@inubekit/stack";
import { useFlag } from "@inubekit/flag";
import { EAppearance } from "@src/types/colors.types";
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
  const navigate = useNavigate();
  const { linparData } = useContext(LinparContext);
  const smallScreen = useMediaQuery("(max-width: 580px)");
  const { addFlag } = useFlag();
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
        addFlag({
          title: finishAssistedRoleMessagesConfig.success.title,
          description: finishAssistedRoleMessagesConfig.success.description(
            generalInformationValues.n_Rol
          ),
          appearance: EAppearance.SUCCESS,
          duration: 5000,
        });
      })
      .catch((error) => {
        addFlag({
          title: finishAssistedRoleMessagesConfig.failed.title,
          description: finishAssistedRoleMessagesConfig.failed.description(
            generalInformationValues.n_Rol
          ),
          appearance: EAppearance.DANGER,
          duration: 5000,
        });
      })
      .finally(() => {
        handleToggleModal();
      });

    setTimeout(() => {
      navigate("/catalogs/roles");
    }, 6000);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
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
        </Stack>
      )}
    </>
  );
}
