import { useState } from "react";

import { EAppearance } from "@src/types/colors.types";
import { IMessage } from "@src/types/messages.types";

import { ActivatePositionUI } from "./interface";
import { IMessageState } from "../../users/types/forms.types";
import {
  activatePositionMessages,
  activatePositionModal,
} from "./config/activatePosition.config";
import { activatePositions } from "./utils";

export interface IDataActivateOption {
  id: string;
  active?: string;
  name: string;
}

interface IActivatePositionProps<T extends IDataActivateOption> {
  handleActivate: () => void;
  showComplete: boolean;
  data: T;
  activateModalConfig: typeof activatePositionModal;
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

  const [loading, setLoading] = useState(false);

  const [changeActive, setchangeActive] = useState(
    data.active === "Y" ? true : false
  );

  const handleActivatePosition = () => {
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
    setShowActivatePositionModal(false);
  };

  const renderMessage = (
    k_Grupo: string,
    type: "activate" | "deactivate" | "failed" = "failed"
  ) => {
    let messageType;
    if (type === "activate") messageType = activatePositionMessages.activation;
    if (type === "deactivate")
      messageType = activatePositionMessages.deactivation;
    if (type === "failed") messageType = activatePositionMessages.failed;

    messageType &&
      setMessage({
        visible: true,
        data: {
          icon: messageType?.icon,
          title: messageType?.title,
          description: messageType.description(k_Grupo),
          appearance: messageType?.appearance,
        },
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
      active={changeActive}
      loading={loading}
      showActivatePosition={showActivatePositionModal}
      id={data.id}
      handleToggleModal={handleToggleModal}
      handleActivatePosition={handleActivatePosition}
      showComplete={showComplete}
      activateModalConfig={activateModalConfig}
      message={message}
      handleCloseSectionMessage={handleCloseSectionMessage}
    />
  );
}
