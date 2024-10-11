import { useContext, useState } from "react";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { LinparContext } from "@context/AppContext";
import {
  activateRoleMessages,
  activateRoleModal,
} from "./config/activateRole.config";

import { ActivateRoleUI } from "./interface";
import { activeRole } from "./utils";

export interface IDataActivateOption {
  id: number;
  active: string;
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
  const [loading, setLoading] = useState(false);

  const [changeActive, setchangeActive] = useState(
    data.active === "Y" ? true : false
  );

  const { linparData } = useContext(LinparContext);

  const handleActivateDeactivateRole = () => {
    setLoading(true);
    const active = activeRole(
      props.data.id,
      changeActive ? "N" : "Y",
      linparData.businessUnit.businessUnitPublicCode
    );
    active
      .then(() => {
        setchangeActive(!changeActive);
        renderMessage(
          props.data.name,
          changeActive ? "deactivate" : "activate"
        );
      })
      .catch((error) => {
        console.error(error);
        renderMessage(props.data.name, "failed");
      });

    setLoading(false);
    setShowActivateRoleModal(false);
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
      active={changeActive}
      loading={loading}
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
