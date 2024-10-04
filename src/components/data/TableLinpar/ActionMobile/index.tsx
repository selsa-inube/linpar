import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { ActionsModal } from "@components/feedback/ActionsModal";
import { IAction, IEntry } from "../types";

interface ActionMobileProps {
  actions: IAction[];
  entry: IEntry;
}

const ActionMobile = (props: ActionMobileProps) => {
  const { actions, entry } = props;
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Icon
        appearance="dark"
        icon={<MdOpenInNew />}
        size="20px"
        onClick={handleToggleModal}
      />
      {showModal && (
        <ActionsModal
          actions={actions}
          entry={entry}
          onClose={handleToggleModal}
        />
      )}
    </>
  );
};

export { ActionMobile };
export type { ActionMobileProps };
