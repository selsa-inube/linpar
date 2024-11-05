import { useState } from "react";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { Icon } from "@inubekit/icon";

interface IDetailsModalProps {
  data: { [key: string]: string | number };
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
