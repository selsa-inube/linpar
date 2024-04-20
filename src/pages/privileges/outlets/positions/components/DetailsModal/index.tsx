import { useState } from "react";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { InteractiveModal } from "@components/feedback/InteractiveModal";

interface IDetailsModalProps {
  data?: { [key: string]: string | number };
}

export const DetailsModal = (props: IDetailsModalProps) => {
  const { data } = props;

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Icon
        icon={<MdOutlineAssignmentTurnedIn />}
        size="16px"
        appearance="dark"
        onClick={handleToggleModal}
        cursorHover
      />
      {showModal && data && (
        <InteractiveModal
          portalId="portal"
          title="Detalles de cargo"
          infoData={data}
          infoTitle="Información"
          closeModal={handleToggleModal}
        />
      )}
    </>
  );
};
