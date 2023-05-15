import { MdOutlineDelete } from "react-icons/md";
import { DecisionModal } from "../../../../../../../components/feedback/DecisionModal";
import { deleteInvitationUserDecisionConfig } from "../../../config/invitationsTable.config";
import { StyledIconDelete } from "./styles";

function DeleteInvitationUI(props) {
  const { handleRemoveInvitation, showModal, toggleModal } = props;

  const { title, description, actionText, appearance } =
    deleteInvitationUserDecisionConfig;

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
          handleConfirm={handleRemoveInvitation}
          appearance={appearance}
        />
      )}
    </>
  );
}

export { DeleteInvitationUI };
