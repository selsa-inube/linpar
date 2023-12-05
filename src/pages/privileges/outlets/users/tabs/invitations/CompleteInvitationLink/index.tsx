import { Link } from "react-router-dom";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { Button, Icon } from "@inube/design-system";
import { IGeneralInformationEntry } from "../../../types/forms.types";
import { useState } from "react";

interface CompleteInvitationLinkProps {
  invitation: IGeneralInformationEntry;
  showComplete: boolean;
}

function CompleteInvitationLink(props: CompleteInvitationLinkProps) {
  const { invitation, showComplete } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {showComplete ? (
        <Button
          iconBefore={<MdOutlineAssignmentTurnedIn />}
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Icon
            appearance={isHovered ? "primary" : "dark"}
            parentHover={isHovered ? true : false}
            cursorHover
            icon={<MdOutlineAssignmentTurnedIn />}
            disabled={invitation.status === "Sent"}
          />
        </Link>
      )}
    </>
  );
}
export { CompleteInvitationLink };
