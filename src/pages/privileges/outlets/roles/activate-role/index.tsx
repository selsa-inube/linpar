import { useState } from "react";

import { updateActive } from "@mocks/utils/dataMock.service";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import {
  activateRoleMessages,
  activateRoleModal,
} from "./config/activateRole.config";

import { ActivateRoleUI } from "./interface";

export interface IDataActivateOption {
  id: string;
  active: boolean;
  name: string;
}
interface IActivateRoleProps<T extends IDataActivateOption> {
  handleActivate: () => void;
  showComplete: boolean;
  data: T;
  activateModalConfig: typeof activateRoleModal;
}

export function ActivateRole<T extends IDataActivateOption>(
  props: IActivateRoleProps<T>
) {
  const { data, showComplete, activateModalConfig } = props;
  const [showActivateRoleModal, setShowActivateRoleModal] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const handleActivateDeactivateRole = async () => {
    const params = {
      key: "k_Rol",
      nameDB: "linix-roles",
      identifier: props.data.id,
      editData: { i_Activo: !props.data.active ? "Y" : "N" },
    };

    await updateActive(params)
      .then(() => {
        renderMessage(
          props.data.name,
          props.data.active ? "deactivate" : "activate"
        );
      })
      .catch((error) => {
        renderMessage(props.data.name, "failed");
      })
      .finally(() => {
        setShowActivateRoleModal(false);
      });
  };

  const renderMessage = (
    n_Rol: string,
    type: "activate" | "deactivate" | "failed" = "failed"
  ) => {
    let messageType;
    if (type === "activate") messageType = activateRoleMessages.activation;
    if (type === "deactivate") messageType = activateRoleMessages.deactivation;
    if (type === "failed") messageType = activateRoleMessages.failed;

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

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  const handleToggleModal = () => {
    setShowActivateRoleModal(!showActivateRoleModal);
  };

  return (
    <ActivateRoleUI
      active={data.active}
      showActivateRole={showActivateRoleModal}
      id={data.name}
      handleToggleModal={handleToggleModal}
      handleActivateRole={handleActivateDeactivateRole}
      showComplete={showComplete}
      activateModalConfig={activateModalConfig}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
    />
  );
}
