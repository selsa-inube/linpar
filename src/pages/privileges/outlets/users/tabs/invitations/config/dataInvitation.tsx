import { Link } from "react-router-dom";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

import { deleteItemData } from "@mocks/utils/dataMock.service";
import { Icon } from "@inubekit/icon";
import { IInvitationsEntry } from "@services/users/invitation.types";
import { Stack } from "@inubekit/stack";
import { ResendInvitation } from "../ResendInvitation";
import { deleteInvitationModal } from "../DeleteInvitation/config/deleteInvitation.config";
import { DeleteLinixInvitation } from "../DeleteInvitation";
import { IDeleteForMessage } from "../../users/types";

export const actionsConfigInvitation = (
  isHovered: boolean,
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>,
  smallScreen: boolean,
  setIdDeleted: (show: IDeleteForMessage) => void
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
        <Link
          to={status !== "sent" ? `complete-invitation/${invitationId}` : "#"}
          onClick={(e) => {
            if (status === "sent") {
              e.preventDefault();
            }
          }}
          style={{ pointerEvents: status === "sent" ? "none" : "auto" }}
        >
          <Stack justifyContent="space-around">
            <Icon
              appearance={isHovered ? "primary" : "dark"}
              parentHover={isHovered ? true : false}
              icon={<MdOutlineAssignmentTurnedIn />}
              disabled={status === "sent"}
              cursorHover
              size="16px"
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
          showComplete={smallScreen}
          disabled={
            invitation.status === "processed" || invitation.status === "pending"
          }
        />
      ),
      type: "primary",
    },
    {
      id: "Delete",
      actionName: "Eliminar",
      content: ({
        invitationId,
        userIdentification,
      }: {
        invitationId: string;
        userIdentification: string;
      }) => (
        <DeleteLinixInvitation
          deleteLinixInvitationModal={deleteInvitationModal}
          linixInvitation={invitationId}
          nameLinixInvitation={userIdentification}
          handleDeleteLinixInvitation={deleteItemData}
          setIdDeleted={setIdDeleted}
        />
      ),
      type: "error",
    },
  ];
  return invitationsTableActions;
};
