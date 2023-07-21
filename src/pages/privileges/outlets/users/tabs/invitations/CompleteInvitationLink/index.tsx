import { Button } from "@inube/design-system";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { StyledLink } from "./styles";
import { IGeneralInformationEntry } from "../../../types/forms.types";

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
          isDisabled={invitation.status === "Sent"}
          path={`complete-invitation/${invitation.id}`}
          variant="none"
          appearance="secondary"
          spacing="compact"
        >
          Completar
        </Button>
      ) : (
        <StyledLink
          status={invitation.status}
          to={`complete-invitation/${invitation.id}`}
        >
          <MdOutlineAssignmentTurnedIn />
        </StyledLink>
      )}
    </>
  );
}
export { CompleteInvitationLink };
