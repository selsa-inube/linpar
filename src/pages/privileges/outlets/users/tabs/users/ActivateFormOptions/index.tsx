import { useState } from "react";

import { updateActive } from "@mocks/utils/dataMock.service";
import { EAppearance } from "@src/types/colors.types";
import { EMessageType, IMessage } from "@src/types/messages.types";
import { activateUserModal } from "@pages/privileges/outlets/users/config/activateUser.config";

import { ActivateUsersUI } from "./interface";
import { IMessageState } from "../../../types/forms.types";
import { activateUsersMessages } from "./config/activateUsers.config";

export interface IDataActivateOption {
  id: string;
  active: boolean;
  name: string;
}

interface IActivateUsersProps<T extends IDataActivateOption> {
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

export function ActivateUsers<T extends IDataActivateOption>(
  props: IActivateUsersProps<T>
) {
  const { data, showComplete, activateModalConfig } = props;
  const [showActivateUsersModal, setShowActivateUsersModal] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
    data: initialMessageState,
  });

  const handleActivateDeactivateUsers = async () => {
    let messageType = EMessageType.FAILED;
    const params = {
      key: "k_Usuari",
      nameDB: "linix-users",
      identifier: props.data.id,
      editData: { i_Activo: !props.data.active ? "Y" : "N" },
    };

    try {
      await updateActive(params);
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
      activateUsersMessages[messageType];

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
    setShowActivateUsersModal(!showActivateUsersModal);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <ActivateUsersUI
      active={data.active}
      showActivateUsers={showActivateUsersModal}
      id={data.id}
      handleToggleModal={handleToggleModal}
      handleActivateUsers={handleActivateDeactivateUsers}
      showComplete={showComplete}
      activateModalConfig={activateModalConfig}
      message={message}
      handleCloseSectionMessage={handleCloseSectionMessage}
    />
  );
}
