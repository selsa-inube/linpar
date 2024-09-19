import { useState } from "react";

import { EAppearance } from "@src/types/colors.types";
import { IMessage } from "@src/types/messages.types";

import { ActivateUsersUI } from "./interface";
import { IMessageState } from "../../../types/forms.types";
import {
  activateUsersMessages,
  activateUsersModal,
} from "./config/activateUsers.config";
import { activatePositions } from "./utils";

export interface IDataActivateOption {
  id: string;
  active?: string;
  name: string;
}

interface IActivateUsersProps<T extends IDataActivateOption> {
  handleActivate: () => void;
  showComplete: boolean;
  data: T;
  activateModalConfig: typeof activateUsersModal;
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

  const [loading, setLoading] = useState(false);

  const [changeActive, setchangeActive] = useState(
    data.active === "Y" ? true : false
  );

  const handleActivateUsers = () => {
    setLoading(true);
    const active = activatePositions(props.data.id, changeActive ? "N" : "Y");
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
    setShowActivateUsersModal(false);
  };

  const renderMessage = (
    k_Usuari: string,
    type: "activate" | "deactivate" | "failed" = "failed"
  ) => {
    let messageType;
    if (type === "failed") messageType = activateUsersMessages.failed;

    messageType &&
      setMessage({
        visible: true,
        data: {
          icon: messageType?.icon,
          title: messageType?.title,
          description: messageType.description(k_Usuari),
          appearance: messageType?.appearance,
        },
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
      active={changeActive}
      loading={loading}
      showActivateUsers={showActivateUsersModal}
      id={data.id}
      handleToggleModal={handleToggleModal}
      handleActivateUsers={handleActivateUsers}
      showComplete={showComplete}
      activateModalConfig={activateModalConfig}
      message={message}
      handleCloseSectionMessage={handleCloseSectionMessage}
    />
  );
}
