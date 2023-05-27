import { MdOutlineDelete } from "react-icons/md";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { deleteInvitationModalConfig } from "../../../config/invitationsTable.config";
import { StyledIconDelete } from "./styles";

function DeleteInvitationUI(props) {
  const { handleRemoveInvitation, showModal, toggleModal } = props;

  const { title, description, actionText, appearance } =
    deleteInvitationModalConfig;

  return (
    <>
      <StyledIconDelete>
        <MdOutlineDelete onClick={toggleModal} />
      </StyledIconDelete>

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
