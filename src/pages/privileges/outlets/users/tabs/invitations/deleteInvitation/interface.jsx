import { MdOutlineDelete } from "react-icons/md";
import { DecisionModal } from "../../../../../../../components/feedback/DecisionModal";
import { SectionMessage } from "../../../../../../../components/feedback/SectionMessage";
import {
  deleteInvitationUserDecisionMock,
  deleteInvitationUserMessageMock,
} from "../../../../../../../mocks/apps/privileges/invitations.mock";
import { StyledIconDelete } from "./styles";

function DeleteUserMessagesUI(props) {
  const { invitation, toggleMessage } = props;
  let messageType = "success";

  const { title, description, icon, appearance, duration } =
    deleteInvitationUserMessageMock[messageType];

  return (
    <SectionMessage
      title={title}
      description={description(invitation)}
      icon={icon}
      appearance={appearance}
      duration={duration}
      closeSectionMessage={toggleMessage}
    />
  );
}

function DeleteInvitationUI(props) {
  const {
    handleRemoveInvitation,
    showModal,
    showMessage,
    toggleModal,
    toggleMessage,
    invitation,
  } = props;

  const { title, description, actionText, appearance } =
    deleteInvitationUserDecisionMock;

  return (
    <>
      <StyledIconDelete>
        <MdOutlineDelete onClick={toggleModal} />
      </StyledIconDelete>
      {showModal && (
        <DecisionModal
          title={title}
          description={description(invitation)}
          actionText={actionText}
          closeModal={toggleModal}
          handleConfirm={handleRemoveInvitation}
          appearance={appearance}
        />
      )}
      {showMessage && (
        <DeleteUserMessagesUI
          invitation={invitation}
          toggleMessage={toggleMessage}
        />
      )}
    </>
  );
}

export { DeleteInvitationUI };
