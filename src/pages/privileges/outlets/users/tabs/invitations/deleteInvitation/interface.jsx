import { MdOutlineDelete } from "react-icons/md";
import { DecisionModal } from "../../../../../../../components/feedback/DecisionModal";
import { deleteInvitationUserDecisionConfig } from "../../../config/invitationsTable.config";
import { StyledIconDelete } from "./styles";

function DeleteInvitationUI(props) {
  const {
    handleRemoveInvitation,
    showModal,
    toggleModal,
    deleteFormRef,
    handleConfirmModal,
  } = props;

  const { title, description, actionText, appearance } =
    deleteInvitationUserDecisionConfig;

  return (
    <>
      <form ref={deleteFormRef} onSubmit={handleRemoveInvitation}>
        <StyledIconDelete>
          <MdOutlineDelete onClick={toggleModal} />
        </StyledIconDelete>
      </form>

      {showModal && (
        <DecisionModal
          title={title}
          description={description}
          actionText={actionText}
          closeModal={toggleModal}
          handleClick={handleConfirmModal}
          appearance={appearance}
        />
      )}
    </>
  );
}

export { DeleteInvitationUI };
