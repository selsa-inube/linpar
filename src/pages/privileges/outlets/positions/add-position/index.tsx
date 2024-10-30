import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormikProps } from "formik";
import { useAuth0 } from "@auth0/auth0-react";
import { getRolesPorCargo } from "@services/positions/rolesPorCargo";
import { dataToAssignmentFormEntry } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case";

import { IGeneralInformationEntry } from "../components/GeneralInformationForm";
import { stepsAddPosition } from "./config/addPosition.config";
import {
  IFormAddPosition,
  IFormAddPositionRef,
  IHandleUpdateDataSwitchstep,
} from "./types";
import { initalValuesPositions } from "./config/initialValues";
import { addPositionStepsRules, saveLinixPositions } from "./utils";
import { AddPositionUI } from "./interface";

import { IMessageState } from "../../users/types/forms.types";
import { generalMessage } from "./config/messages.config";
import { LinparContext } from "@src/context/AppContext";

export function AddPosition() {
  const [currentStepNumber, setCurrentStepNumber] = useState<number>(1);

  const steps = Object.values(stepsAddPosition);
  const currentStep = steps.find(
    (step: { number: number }) => step.number === currentStepNumber
  );
  const [loading, setLoading] = useState(false);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [rolesPorCargos, setrolesPorCargo] = useState<
    Record<string, unknown>[]
  >([]);
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { linparData } = useContext(LinparContext);

  const [dataAddPositionLinixForm, setDataAddPositionLinixForm] =
    useState<IFormAddPosition>({
      generalInformation: {
        isValid: false,
        values: initalValuesPositions.generalInformation,
      },
      rolesPorCargos: {
        isValid: false,
        values: [],
      },
    });

  const rolesPorCargo = () => {
    if (!user) return;
    if (rolesPorCargos.length === 0) {
      getRolesPorCargo("1", linparData.businessUnit.businessUnitPublicCode)
        .then((data) => {
          if (data !== null) {
            setrolesPorCargo(data as Record<string, unknown>[]);
            setDataAddPositionLinixForm((prevFormData: IFormAddPosition) => ({
              ...prevFormData,
              rolesPorCargos: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Rol",
                  valueLabel: "n_Rol",
                  isActiveLabel: "i_Tierol",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        });
    }
  };

  useEffect(() => {
    rolesPorCargo();
  }, []);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const formReferences: IFormAddPositionRef = {
    generalInformation: generalInformationRef,
  };

  const handleStepChange = (stepId: number) => {
    console.log(
      "from index add: ",
      dataAddPositionLinixForm,
      " formReferences ",
      formReferences,
      " stepId ",
      stepId,
      " currentStepNumber ",
      currentStepNumber,
      " isCurrentFormValid ",
      isCurrentFormValid
    );

    const newAddPosition = addPositionStepsRules(
      currentStepNumber,
      dataAddPositionLinixForm,
      formReferences,
      isCurrentFormValid
    );

    setDataAddPositionLinixForm((prevData) => ({
      ...prevData,
      ...newAddPosition,
    }));

    setCurrentStepNumber(stepId);
    document.getElementsByTagName("main")[0].scrollTo(0, 0);
  };

  const handleNextStep = () => {
    if (currentStepNumber === steps.length) {
      handleToggleModal();
    }
    if (currentStepNumber < steps.length && isCurrentFormValid) {
      handleStepChange(currentStepNumber + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepNumber > 1) {
      handleStepChange(currentStepNumber - 1);
    }
  };

  function handleUpdateDataSwitchstep(values: IHandleUpdateDataSwitchstep) {
    if (currentStep) {
      setDataAddPositionLinixForm({
        ...dataAddPositionLinixForm,
        [currentStep.number]: { values },
      });
    }
  }

  const handleToggleModal = () => {
    setShowModal(!showModal);
    setLoading(true);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
    navigate("/privileges/positions");
  };

  const handleFinishForm = () => {
    saveLinixPositions(
      dataAddPositionLinixForm,
      linparData.businessUnit.businessUnitPublicCode
    );
    handleToggleModal();
    setMessage({
      visible: true,
      data: generalMessage.success,
    });
  };

  return (
    <AddPositionUI
      step={steps}
      currentStep={currentStep}
      isCurrentFormValid={isCurrentFormValid}
      dataAddPositionLinixForm={dataAddPositionLinixForm}
      formReferences={formReferences}
      showModal={showModal}
      loading={loading}
      message={message}
      setIsCurrentFormValid={setIsCurrentFormValid}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      handleUpdateDataSwitchstep={handleUpdateDataSwitchstep}
      handleToggleModal={handleToggleModal}
      handleFinishForm={handleFinishForm}
      handleCloseSectionMessage={handleCloseSectionMessage}
    />
  );
}
