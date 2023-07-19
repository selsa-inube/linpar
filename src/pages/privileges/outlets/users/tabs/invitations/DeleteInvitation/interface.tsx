import { DecisionModal } from "@components/feedback/DecisionModal";
import { Button } from "@inube/design-system";
import { MdOutlineDelete } from "react-icons/md";
import { deleteInvitationModalConfig } from "../../../config/invitationsTable.config";
import { StyledIconDelete } from "./styles";

interface DeleteInvitationUIProps {
  handleRemoveInvitation: () => void;
  showModal: boolean;
  toggleModal: () => void;
  showComplete: boolean;
}

function DeleteInvitationUI(props: DeleteInvitationUIProps) {
  const { handleRemoveInvitation, showModal, toggleModal, showComplete } =
    props;

  const { title, description, actionText, appearance } =
    deleteInvitationModalConfig;

  return (
    <>
      {showComplete ? (
        <Button
          iconBefore={<MdOutlineDelete size={18} />}
          handleClick={toggleModal}
          variant="none"
          appearance="remove"
          spacing="compact"
        >
          Eliminar
        </Button>
      ) : (
        <StyledIconDelete>
          <MdOutlineDelete onClick={toggleModal} />
        </StyledIconDelete>
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
