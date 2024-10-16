import { useEffect, useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { ActionsModal } from "@components/feedback/ActionsModal";
import { IAction, IEntry } from "../types";

interface ActionMobileProps {
  actions: IAction[];
  entry: IEntry;
}

let isModalOpen = false;

const ActionMobile = (props: ActionMobileProps) => {
  const { actions, entry } = props;
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    isModalOpen = false;
  }, []);

  const handleToggleModal = () => {
    if (!isModalOpen) {
      setShowModal(true);
      isModalOpen = true;
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    isModalOpen = false;
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
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export { ActionMobile };
export type { ActionMobileProps };
