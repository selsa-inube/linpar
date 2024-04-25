import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";
import { getAll } from "@mocks/utils/dataMock.service";
import { MockPositions } from "@src/mocks/privileges/positions/Positions.mock";
import { EditPositionUI } from "./interface";
import { IFormAddPosition } from "../add-position/types";
import { dataToAssignmentFormEntry } from "../../linixUseCase/adding-linix-use-case";
import { editPositionTabsConfig } from "./config/editPosition.config";
import { initalValuesPositions } from "../add-position/config/initialValues";

export function EditPosition() {
  const { k_Grupo } = useParams();

  const [controlModal, setControlModal] = useState({
    show: false,
    continueTab: "",
  });
  const [currentFormHasChanges, setCurrentFormHasChanges] = useState(false);

  const [selectedTab, setSelectedTab] = useState<string>(
    editPositionTabsConfig.roles.id
  );

  const [dataEditPositionForm, setDataEditPositionForm] =
    useState<IFormAddPosition>({
      generalInformation: {
        isValid: false,
        values: initalValuesPositions.generalInformation,
      },
      roles: {
        isValid: false,
        values: [],
      },
    });

  const [editData, setEditData] = useState<{
    [key: string]: { [key: string]: unknown };
  }>({
    generalInformation: { entries: getInformation() },
  });

  useEffect(() => {
    getAll("linix-roles")
      .then((data) => {
        if (data !== null) {
          setDataEditPositionForm(
            (prevDataEditPositionForm: IFormAddPosition) => ({
              ...prevDataEditPositionForm,
              roles: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Rol",
                  valueLabel: "n_Rol",
                  isActiveLabel: "asignado",
                }),
              },
            })
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching roles:", error.message);
      });
  }, []);

  function getInformation() {
    return MockPositions.find((position) => position.k_Grupo === k_Grupo);
  }

  const handleSubmit = (values: IAssignmentFormEntry[]) => {
    const editKey = Object.entries(editPositionTabsConfig).find(
      ([, config]) => config.id === selectedTab
    )?.[0];

    if (editKey) {
      setEditData((prevDataEditPositionForm) => ({
        ...prevDataEditPositionForm,
        [editKey as keyof string]: { entries: values },
      }));
      setCurrentFormHasChanges(false);
    }
  };

  const handleTabChange = (tabId: string) => {
    let modalUpdate = controlModal;
    let selectTab = tabId;

    if (currentFormHasChanges) {
      modalUpdate = { show: true, continueTab: tabId };
      selectTab = selectedTab;
    }
    setControlModal(modalUpdate);
    setSelectedTab(selectTab);
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

  return (
    <EditPositionUI
      selectedTab={selectedTab}
      dataEditPositionForm={dataEditPositionForm}
      editData={editData}
      handleTabChange={handleTabChange}
      handleSubmit={handleSubmit}
      controlModal={controlModal}
      handleDataChange={handleDataChange}
      handleCloseModal={handleCloseModal}
      handleContinueTab={handleContinueTab}
    />
  );
}
