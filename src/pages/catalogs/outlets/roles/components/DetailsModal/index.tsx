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
  return (
    <>
      <Icon
        icon={<MdOutlineAssignmentTurnedIn />}
        size="16px"
        appearance="dark"
        onClick={() => setShowModal(true)}
        cursorHover
      />
      {showModal && data && (
        <InteractiveModal
          portalId="portal"
          title="Detalles Rol"
          infoData={data}
          infoTitle="Información"
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};
