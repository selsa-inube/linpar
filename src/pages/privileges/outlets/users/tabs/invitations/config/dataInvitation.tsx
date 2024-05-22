import { Stack, Icon } from "@inube/design-system";
import { Link } from "react-router-dom";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

import { deleteItemData } from "@mocks/utils/dataMock.service";
import { IInvitationsEntry } from "@src/services/users/invitation.types";

import { ResendInvitation } from "../ResendInvitation";
import { DeleteInvitation } from "../DeleteInvitation";
import { deleteInvitationModal } from "../DeleteInvitation/config/deleteInvitation.config";

export const actionsConfigInvitation = (
  isHovered: boolean,
  handleResendInvitation: (invitation: IInvitationsEntry) => void,
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>,
  smallScreen: boolean
) => {
  const invitationsTableActions = [
    {
      id: "Complete",
      actionName: "Completar",
      content: ({
        invitationId,
        status,
      }: {
        invitationId: string;
        status: string;
      }) => (
        <Link to={`complete-invitation/${invitationId}`}>
          <Stack
            justifyContent="space-around"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Icon
              appearance={isHovered ? "primary" : "dark"}
              parentHover={isHovered ? true : false}
              icon={<MdOutlineAssignmentTurnedIn />}
              disabled={status === "Sent"}
              cursorHover
            />
          </Stack>
        </Link>
      ),
      type: "gray",
    },

    {
      id: "Resend",
      actionName: "Reenviar",
      content: (invitation: IInvitationsEntry) => (
        <ResendInvitation
          invitation={invitation}
          handleResendInvitation={() => handleResendInvitation(invitation)}
          showComplete={smallScreen}
        />
      ),
      type: "primary",
    },
    {
      id: "Delete",
      actionName: "Eliminar",
      content: ({
        customerId,
        userName,
      }: {
        customerId: string;
        userName: string;
      }) => (
        <DeleteInvitation
          deleteInvitation={deleteInvitationModal}
          linixInvitation={customerId}
          userNameInvitation={userName}
          handleDeleteInvitation={deleteItemData}
        />
      ),
      type: "error",
    },
  ];
  return invitationsTableActions;
};
