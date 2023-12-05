import { DecisionModal } from "@components/feedback/DecisionModal";
import { Button, Icon } from "@inube/design-system";
import { MdOutlineDelete } from "react-icons/md";
import { deleteInvitationModalConfig } from "../../../config/invitationsTable.config";
import { useState } from "react";

interface DeleteInvitationUIProps {
  handleRemoveInvitation: () => void;
  showModal: boolean;
  toggleModal: () => void;
  showComplete: boolean;
}

function DeleteInvitationUI(props: DeleteInvitationUIProps) {
  const { handleRemoveInvitation, showModal, toggleModal, showComplete } =
    props;
  const [isHovered, setIsHovered] = useState(false);

  const { title, description, actionText, appearance } =
    deleteInvitationModalConfig;

  return (
    <>
      {showComplete ? (
        <Button
          iconBefore={<MdOutlineDelete />}
          onClick={toggleModal}
          variant="none"
          appearance="error"
          spacing="compact"
        >
          Eliminar
        </Button>
      ) : (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Icon
            icon={<MdOutlineDelete />}
            onClick={toggleModal}
            appearance={isHovered ? "primary" : "dark"}
            parentHover={isHovered ? true : false}
            cursorHover
          />
        </div>
      )}

      {showModal && (
        <DecisionModal
          title={title}
          description={description}
          actionText={actionText}
          closeModal={toggleModal}
          handleClick={handleRemoveInvitation}
          appearance={appearance}
        />
      )}
    </>
  );
}

export { DeleteInvitationUI };
