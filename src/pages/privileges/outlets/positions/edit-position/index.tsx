import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { getPositions } from "@services/positions/getPositons";
import { getRolesPorCargo } from "@services/positions/rolesPorCargo";
import { dataToAssignmentFormEntry } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case";

import { EditPositionUI } from "./interface";
import {
  IFormAddPosition,
  IHandleUpdateDataSwitchstep,
  IPosition,
} from "../add-position/types";

import { editPositionTabsConfig } from "./config/editPosition.config";
import { initalValuesPositions } from "../add-position/config/initialValues";

import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../users/types/forms.types";
import { generalMessage } from "../add-position/config/messages.config";
import { editPositions } from "./utils";
import { LinparContext } from "@src/context/AppContext";

export function EditPosition() {
  const { k_Grupo } = useParams();

  const initialGeneralFormState = {
    generalInformation: {
      isValid: false,
      values: {
        k_Grupo: "",
        n_Grupo: "",
        n_Uso: "",
      },
    },
    rolesPorCargos: {
      isValid: false,
      values: [],
    },
  };
  const [formData, setFormData] = useState<IFormAddPosition>(
    initialGeneralFormState
  );

  const [positionsEdit, setPositionssEdit] = useState<IPosition[]>([]);
  const [rolesPorCargo, setRolesPorCargos] = useState<
    Record<string, unknown>[]
  >([]);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [controlModal, setControlModal] = useState({
    show: false,
    continueTab: "",
  });
  const [currentFormHasChanges, setCurrentFormHasChanges] = useState(false);
  const [loading, setLoading] = useState(false);
  const [csOptionsChange, setCSOptionsChange] = useState<
    IAssignmentFormEntry[]
  >([]);

  const [selectedTab, setSelectedTab] = useState<string>(
    editPositionTabsConfig.generalInformation.id
  );
  const originalDataEditPositionsForm = useRef<IFormAddPosition | null>(null);

  const { user } = useAuth0();
  const { linparData } = useContext(LinparContext);
  const [editData, setEditData] = useState<{
    [key: string]: { [key: string]: unknown };
  }>({
    generalInformation: { entries: initalValuesPositions.generalInformation },
    roles: { entries: [] },
  });

  const generalInformationData = positionsEdit.find(
    (data) => data.id === k_Grupo
  );
  useEffect(() => {
    positionsData();
  }, []);
  useEffect(() => {
    rolesPorCargos();
  }, []);
  const positionsData = async () => {
    if (!user) return;
    if (positionsEdit.length === 0) {
      setLoading(true);
      getPositions(linparData.businessUnit.businessUnitPublicCode)
        .then((data) => {
          if (data !== null) {
            setPositionssEdit(data as IPosition[]);
            const generalData = data.find((data) => data.id === k_Grupo);
            setFormData((prevFormData: IFormAddPosition) => ({
              ...prevFormData,
              generalInformation: {
                isValid: true,
                values: {
                  k_Grupo: String(generalData?.k_Grupo) || "",
                  n_Grupo: String(generalData?.n_Grupo) || "",
                  n_Uso: String(generalData?.n_Uso) || "",
                },
              },
            }));
            originalDataEditPositionsForm.current = {
              ...originalDataEditPositionsForm.current!,
              generalInformation: {
                isValid: true,
                values: {
                  k_Grupo: String(generalData?.k_Grupo) || "",
                  n_Grupo: String(generalData?.n_Grupo) || "",
                  n_Uso: String(generalData?.n_Uso) || "",
                },
              },
            };
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
  const rolesPorCargos = () => {
    if (!user) return;
    if (rolesPorCargo.length === 0) {
      getRolesPorCargo(
        k_Grupo || "1",
        linparData.businessUnit.businessUnitPublicCode
      )
        .then((data) => {
          if (data !== null) {
            setRolesPorCargos(data as Record<string, unknown>[]);
            setFormData((prevFormData: IFormAddPosition) => ({
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
            originalDataEditPositionsForm.current = {
              ...originalDataEditPositionsForm.current!,
              rolesPorCargos: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Rol",
                  valueLabel: "n_Rol",
                  isActiveLabel: "i_Tierol",
                }),
              },
            };
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        });
    }
  };

  const handleSubmit = (values: IHandleUpdateDataSwitchstep) => {
    const editKey = Object.entries(editPositionTabsConfig).find(
      ([, config]) => config.id === selectedTab
    )?.[0];

    if (editKey) {
      setEditData((prevDataEditPosition) => ({
        ...prevDataEditPosition,
        [editKey as keyof string]: { entries: values },
      }));
      setCurrentFormHasChanges(false);
    }
  };

  const handleTabChange = (tabId: string) => {
    setControlModal({ show: true, continueTab: tabId });
    setSelectedTab(tabId);
  };

  const handleCloseModal = () => {
    setControlModal((prevControlModal) => ({
      ...prevControlModal,
      show: false,
    }));
  };

  const handleDataChange = (hasChanges: boolean) => {
    setCurrentFormHasChanges(hasChanges);
  };

  const handleContinueTab = () => {
    setCurrentFormHasChanges(false);
    setSelectedTab(controlModal.continueTab);
  };
  const navigate = useNavigate();
  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
    navigate("/privileges/positions");
  };
  const editGeneral = generalInformationData;

  const handleUpdateFormData = (values: IHandleUpdateDataSwitchstep) => {
    const stepKey = Object.entries(editPositionTabsConfig).find(
      ([, config]) => config.id === selectedTab
    )?.[0];

    if (stepKey) {
      setFormData((prevFormData: IFormAddPosition) => ({
        ...prevFormData,
        [stepKey]: { values: values },
      }));
    }
  };
  const handleReset = () => {
    setFormData(originalDataEditPositionsForm.current!);
    setCurrentFormHasChanges(false);
  };

  const onSubmit = () => {
    setLoading(true);
    const addnewdata = editPositions(
      formData,
      linparData.businessUnit.businessUnitPublicCode,
      csOptionsChange
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
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const userCardData = formData && {
    code: formData.generalInformation.values.k_Grupo,
    username: formData.generalInformation.values.n_Grupo,
    description: formData.generalInformation.values.n_Uso,
  };
  return (
    <EditPositionUI
      setCsOptionsChange={setCSOptionsChange}
      positionsEdit={editGeneral!}
      handleUpdateFormData={handleUpdateFormData}
      onSubmit={onSubmit}
      onCloseSectionMessage={handleCloseSectionMessage}
      handleReset={handleReset}
      currentFormHasChanges={currentFormHasChanges}
      formData={formData}
      selectedTab={selectedTab}
      editData={editData}
      csOptionsChange={csOptionsChange}
      id={k_Grupo || "1"}
      loading={loading}
      handleTabChange={handleTabChange}
      handleSubmit={handleSubmit}
      controlModal={controlModal}
      handleDataChange={handleDataChange}
      handleCloseModal={handleCloseModal}
      handleContinueTab={handleContinueTab}
      message={message}
      userCardData={userCardData}
    />
  );
}
