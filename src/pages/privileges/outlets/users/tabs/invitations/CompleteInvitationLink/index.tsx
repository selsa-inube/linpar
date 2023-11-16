import { Button, Icon } from "@inube/design-system";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { IGeneralInformationEntry } from "../../../types/forms.types";
import { Link } from "react-router-dom";

interface CompleteInvitationLinkProps {
  invitation: IGeneralInformationEntry;
  showComplete: boolean;
}

function CompleteInvitationLink(props: CompleteInvitationLinkProps) {
  const { invitation, showComplete } = props;

  return (
    <>
      {showComplete ? (
        <Button
          iconBefore={<MdOutlineAssignmentTurnedIn size={18} />}
          type="link"
          disabled={invitation.status === "Sent"}
          path={`complete-invitation/${invitation.id}`}
          variant="none"
          appearance="gray"
          spacing="compact"
        >
          Completar
        </Button>
      ) : (
        <Link
          to={
            invitation.status === "Pending"
              ? `complete-invitation/${invitation.id}`
              : ""
          }
        >
          <Icon
            appearance={"dark"}
            icon={<MdOutlineAssignmentTurnedIn />}
            disabled={invitation.status === "Sent"}
          />
        </Link>
      )}
    </>
  );
}
export { CompleteInvitationLink };
