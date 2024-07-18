import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAll } from "@mocks/utils/dataMock.service";
import { EditPositionUI } from "./interface";
import { IHandleUpdateDataSwitchstep } from "../add-position/types";
import { dataToAssignmentFormEntry } from "../../linixUseCase/adding-linix-use-case";
import { editPositionTabsConfig } from "./config/editPosition.config";
import { initalValuesPositions } from "../add-position/config/initialValues";

export function EditPosition() {
  const { position_id } = useParams();

  const [controlModal, setControlModal] = useState({
    show: false,
    continueTab: "",
  });
  const [currentFormHasChanges, setCurrentFormHasChanges] = useState(false);
  const [loading, setLoading] = useState(true);

  const [selectedTab, setSelectedTab] = useState<string>(
    editPositionTabsConfig.generalInformation.id
  );

  const [editData, setEditData] = useState<{
    [key: string]: { [key: string]: unknown };
  }>({
    generalInformation: { entries: initalValuesPositions.generalInformation },
    roles: { entries: [] },
  });

  useEffect(() => {
    setLoading(true);
    getAll("linix-positions")
      .then((data) => {
        if (data !== null) {
          const positionsLinix =
            data &&
            Object.values(data).find(
              (position) => position.k_Grupo === position_id
            );
          setEditData((prevFormData) => ({
            ...prevFormData,
            generalInformation: {
              entries: positionsLinix,
            },
          }));
        }
      })
      .catch((error) => {
        console.info(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [position_id]);

  useEffect(() => {
    getAll("linix-roles")
      .then((data) => {
        if (data !== null) {
          setEditData((prevDataEditPositionForm) => ({
            ...prevDataEditPositionForm,
            roles: {
              entries: dataToAssignmentFormEntry({
                dataOptions: data as Record<string, unknown>[],
                idLabel: "k_Rol",
                valueLabel: "n_Rol",
                isActiveLabel: "asignado",
              }),
            },
          }));
        }
      })
      .catch((error) => {
        console.error("Error fetching roles:", error.message);
      });
  }, []);

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
      editData={editData}
      id={position_id || ""}
      loading={loading}
      handleTabChange={handleTabChange}
      handleSubmit={handleSubmit}
      controlModal={controlModal}
      handleDataChange={handleDataChange}
      handleCloseModal={handleCloseModal}
      handleContinueTab={handleContinueTab}
    />
  );
}
