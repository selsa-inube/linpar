import { useContext, useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  IFormCompleteInvitation,
  IInvitation,
  IInvitationsEntry,
} from "@services/users/invitation.types";
import { getPositions } from "@services/positions/getPositons";
import { getSucursales } from "@services/users/sucursales";
import { getProyectos } from "@services/users/proyectos";
import { getUnidadesPresupuestales } from "@services/users/unidadesPresupuestales";
import { getNomina } from "@services/users/nomina";
import { completeInvitationData, completeInvitationStepsRules } from "./utils";
import { getInvitations } from "@services/invitations/getInvitations";
import { dataToAssignmentFormEntry } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case";
import { LinparContext } from "@context/AppContext";
import { stepsRegisterUserConfig } from "./config/completeInvitation.config";
import { IFormCompleteInvitationRef } from "./types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";
import { CompleteInvitationUI } from "./interface";
import { generalMessage } from "../../users/EditUser/config/messages.config";

function CompleteInvitation() {
  const { invitationId } = useParams();
  const { user } = useAuth0();
  const navigate = useNavigate();

  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(
    stepsRegisterUserConfig.generalInformation.id
  );
  const originalDataInvitationForm = useRef<IFormCompleteInvitation | null>(
    null
  );
  const [invitedUsers, setInvitedUsers] = useState<IInvitationsEntry[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [payrolls, setPayrolls] = useState<Record<string, unknown>[]>([]);
  const [branches, setBranches] = useState<Record<string, unknown>[]>([]);

  const [positions, setPositions] = useState<Record<string, unknown>[]>([]);
  const [projects, setProjects] = useState<Record<string, unknown>[]>([]);
  const [aidBudgetUnits, setAidBudgetUnits] = useState<
    Record<string, unknown>[]
  >([]);
  const [loading, setLoading] = useState(false);
  const initialGeneralFormState = {
    generalInformation: {
      isValid: false,
      values: {
        email: "",
        phoneNumber: "",
        userIdentification: "",
        userName: "",
        invitationId: "",
        password: "",
        positions: "",
        positionsId: "",
        userAccountId: "",
      },
    },
    branches: { isValid: false, values: [] },
    proyectsEvents: { isValid: true, values: [] },
    aidBudgetUnits: { isValid: true, values: [] },
    payrolls: { isValid: true, values: [] },
    payrollPayments: { isValid: true, values: [] },
  };

  const [invitationData, setInvitationData] = useState<IFormCompleteInvitation>(
    initialGeneralFormState
  );
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const { linparData } = useContext(LinparContext);
  const steps = Object.values(stepsRegisterUserConfig);
  useEffect(() => {
    linixInvitation();
  }, []);

  useEffect(() => {
    cargosData();
    branchesData();
    projectsData();
    aidBudgetUnitsData();
    payrollsData();
  }, []);

  const linixInvitation = async () => {
    if (!user) return;
    if (invitedUsers.length === 0) {
      setLoading(true);
      getInvitations(linparData.businessUnit.businessUnitPublicCode)
        .then((data) => {
          if (data !== null) {
            setInvitedUsers(data as IInvitationsEntry[]);
            const generalData = data.find((data) => data.id === invitationId);
            if (generalData) {
              setInvitationData((prevFormData: IFormCompleteInvitation) => ({
                ...prevFormData,
                generalInformation: {
                  isValid: true,
                  values: {
                    invitationId: String(generalData.invitationId) || "",
                    email: String(generalData.email) || "",
                    phoneNumber: String(generalData.phoneNumber) || "",
                    userIdentification:
                      String(generalData.userIdentification) || "",
                    userName: String(generalData.userName) || "",
                    password: String(generalData.password) || "",
                    userAccountId: String(generalData.userAccountId) || "",
                  },
                },
              }));
              originalDataInvitationForm.current = {
                ...originalDataInvitationForm.current!,
                generalInformation: {
                  isValid: true,
                  values: {
                    invitationId: String(generalData.invitationId) || "",
                    email: String(generalData.email) || "",
                    phoneNumber: String(generalData.phoneNumber) || "",
                    userIdentification:
                      String(generalData.userIdentification) || "",
                    userName: String(generalData.userName) || "",
                    password: String(generalData.password) || "",
                    userAccountId: String(generalData.userAccountId) || "",
                  },
                },
              };
            } else {
              console.error(
                "No se encontró la invitación con el ID:",
                invitationId
              );
            }
          }
        })

        .catch((error) => {
          console.error("Error fetching general Information:", error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const cargosData = () => {
    if (!user) return;
    if (positions.length === 0) {
      setLoading(true);
      getPositions(linparData.businessUnit.businessUnitPublicCode)
        .then((newUsers) => {
          setPositions(newUsers as keyof unknown as Record<string, unknown>[]);
        })
        .catch((error) => {
          console.info(error);
        });
    }
  };
  const branchesData = () => {
    if (!user) return;
    if (branches.length === 0) {
      setLoading(true);
      getSucursales("1", linparData.businessUnit.businessUnitPublicCode)
        .then((data) => {
          if (data !== null) {
            setBranches(data as unknown as Record<string, unknown>[]);
            setInvitationData((prevFormData: IFormCompleteInvitation) => ({
              ...prevFormData,
              branches: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "k_Sucurs",
                  valueLabel: "n_Sucurs",
                  isActiveLabel: "i_Privil",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching branches:", error.message);
        });
    }
  };
  const projectsData = () => {
    if (!user) return;
    if (projects.length === 0) {
      setLoading(true);
      getProyectos("1", linparData.businessUnit.businessUnitPublicCode)
        .then((data) => {
          if (data !== null) {
            setProjects(data as unknown as Record<string, unknown>[]);
            setInvitationData((prevFormData: IFormCompleteInvitation) => ({
              ...prevFormData,
              proyectsEvents: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "k_Numdoc",
                  valueLabel: "k_Tipodr",
                  isActiveLabel: "i_Privil",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching branches:", error.message);
        });
    }
  };

  const aidBudgetUnitsData = () => {
    if (!user) return;
    if (aidBudgetUnits.length === 0) {
      setLoading(true);
      getUnidadesPresupuestales(
        "1",
        linparData.businessUnit.businessUnitPublicCode
      )
        .then((data) => {
          if (data !== null) {
            setAidBudgetUnits(data as unknown as Record<string, unknown>[]);
            setInvitationData((prevFormData: IFormCompleteInvitation) => ({
              ...prevFormData,
              aidBudgetUnits: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "k_Unidad",
                  valueLabel: "n_Unidad",
                  isActiveLabel: "i_Privil",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching branches:", error.message);
        });
    }
  };

  const payrollsData = () => {
    if (!user) return;
    if (payrolls.length === 0) {
      setLoading(true);
      getNomina("1", linparData.businessUnit.businessUnitPublicCode)
        .then((data) => {
          if (data !== null) {
            setPayrolls(data as unknown as Record<string, unknown>[]);
            setInvitationData((prevFormData: IFormCompleteInvitation) => ({
              ...prevFormData,
              payrolls: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "k_Tipnom",
                  valueLabel: "n_Tipnom",
                  isActiveLabel: "i_Privil",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching branches:", error.message);
        });
    }
  };

  const generalInformationRef = useRef<FormikProps<IInvitation>>(null);

  const formReferences: IFormCompleteInvitationRef = {
    generalInformation: generalInformationRef,
  };

  const handleStepChange = (stepId: number) => {
    const newCompleteInvitation = completeInvitationStepsRules(
      currentStep,
      invitationData,
      formReferences,
      isCurrentFormValid
    );

    setInvitationData(newCompleteInvitation);

    if (!newCompleteInvitation) return;

    setIsCurrentFormValid(true);

    setCurrentStep(stepId);

    document.getElementsByTagName("main")[0].scrollTo(0, 0);
  };
  const handleSubmit = (values: IAssignmentFormEntry[]) => {
    const stepKey = Object.entries(stepsRegisterUserConfig).find(
      ([, config]) => config.id === currentStep
    )?.[0];

    if (stepKey) {
      setInvitationData((prevFormData) => ({
        ...prevFormData,
        [stepKey]: { values: values },
      }));
    }
  };

  const handleNextStep = () => {
    if (currentStep + 1 <= steps.length && isCurrentFormValid) {
      handleStepChange(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    handleStepChange(currentStep - 1);
  };

  const handleCompleteInvitation = () => {
    const addnewdata = completeInvitationData(
      invitationData,
      linparData.businessUnit.businessUnitPublicCode
    );
    addnewdata
      .then(() => {
        setMessage({
          visible: true,
          data: generalMessage.success,
        });
      })
      .catch(() => {
        setMessage({
          visible: true,
          data: generalMessage.failed,
        });
      });
    handleToggleModal();
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
    navigate("/privileges/users");
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <CompleteInvitationUI
      currentStep={currentStep}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      handlePreviousStep={handlePrevStep}
      formReferences={formReferences}
      invitationData={invitationData}
      isCurrentFormValid={isCurrentFormValid}
      loading={loading}
      positions={positions}
      handleSubmit={handleSubmit}
      handlePrevStep={handlePrevStep}
      handleNextStep={handleNextStep}
      showModal={showModal}
      steps={steps}
      handleToggleModal={handleToggleModal}
      handleCompleteInvitation={handleCompleteInvitation}
      setIsCurrentFormValid={setIsCurrentFormValid}
      setCurrentStep={setCurrentStep}
    />
  );
}

export { CompleteInvitation };
