import { useState } from "react";

import { updateItemData } from "@mocks/utils/dataMock.service";
import { EAppearance } from "@src/types/colors.types";
import { EMessageType, IMessage } from "@src/types/messages.types";

import { activateUserModal } from "../../users/config/activateUser.config";
import { ActivatePositionUI } from "./interface";
import { IMessageState } from "../../users/types/forms.types";
import { activatePositionMessages } from "./config/activatePosition.config";

export interface IDataActivateOption {
  id: string;
  active: boolean;
  name: string;
}

interface IActivatePositionProps<T extends IDataActivateOption> {
  handleActivate: () => void;
  showComplete: boolean;
  data: T;
  activateModalConfig: typeof activateUserModal;
}

const initialMessageState: IMessage = {
  show: false,
  title: "",
  description: "",
  icon: <></>,
  appearance: "" as EAppearance,
};

export function ActivatePosition<T extends IDataActivateOption>(
  props: IActivatePositionProps<T>
) {
  const { data, showComplete, activateModalConfig } = props;
  const [showActivatePositionModal, setShowActivatePositionModal] =
    useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
    data: initialMessageState,
  });

  const handleActivateDeactivatePosition = async () => {
    let messageType = EMessageType.FAILED;
    const params = {
      key: "k_Grupo",
      nameDB: "linix-positions",
      identifier: props.data.id,
      editData: { i_Activo: !props.data.active ? "Y" : "N" },
      toggleI_Activo: true,
    };

    try {
      await updateItemData(params);
      handleToggleModal();
      if (params.editData.i_Activo === "Y") {
        messageType = EMessageType.ACTIVATION;
      }

      if (params.editData.i_Activo === "N") {
        messageType = EMessageType.DEACTIVATION;
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    }

    const { title, description, icon, appearance } =
      activatePositionMessages[messageType];

    handleShowMessage({
      title,
      description: description(data.name),
      icon,
      appearance,
    });
  };

  const handleShowMessage = (message: IMessage) => {
    const { title, description, icon, appearance } = message;
    setMessage({
      visible: true,
      data: { show: true, title, description, icon, appearance },
    });
  };

  const handleToggleModal = () => {
    setShowActivatePositionModal(!showActivatePositionModal);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <ActivatePositionUI
      active={data.active}
      showActivatePosition={showActivatePositionModal}
      id={data.id}
      handleToggleModal={handleToggleModal}
      handleActivatePosition={handleActivateDeactivatePosition}
      showComplete={showComplete}
      activateModalConfig={activateModalConfig}
      message={message}
      handleCloseSectionMessage={handleCloseSectionMessage}
    />
  );
}
