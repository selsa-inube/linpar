import { MdOutlineDelete } from "react-icons/md";
import { DecisionModal } from "../../../../../../../components/feedback/DecisionModal";
import { SectionMessage } from "../../../../../../../components/feedback/SectionMessage";
import {
  deleteInvitationUserDecisionMock,
  deleteInvitationUserMessageMock,
} from "../../../../../../../mocks/apps/privileges/invitations.mock";

export default function DeleteInvitationUI(props) {
  const {
    handleRemoveInvitation,
    showModal,
    showMessage,
    toggleModal,
    toggleMessage,
  } = props;
  <form>
    <MdOutlineDelete onClick={handleRemoveInvitation} />
    {showModal && (
      <DecisionModal
        title={deleteInvitationUserDecisionMock.title}
        description={deleteInvitationUserDecisionMock.description}
        textAction={deleteInvitationUserDecisionMock.textAction}
        closeModal={toggleModal}
      />
    )}
    {showMessage && (
      <SectionMessage
        title={deleteInvitationUserMessageMock.title}
        description={deleteInvitationUserMessageMock.description}
        icon={deleteInvitationUserMessageMock.icon}
        duration={deleteInvitationUserMessageMock.duration}
        appearance={deleteInvitationUserMessageMock.appearance}
        closeSectionMessage={toggleMessage}
      />
    )}
  </form>;
}
