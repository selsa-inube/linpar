import { Link } from "react-router-dom";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

import { Icon } from "@inube/design-system";
import { deleteItemData } from "@mocks/utils/dataMock.service";
import { IInvitationsEntry } from "@services/users/invitation.types";

import { ResendInvitation } from "../ResendInvitation";

import { deleteInvitationModal } from "../DeleteInvitation/config/deleteInvitation.config";
import { DeleteLinixInvitation } from "../DeleteInvitation";
import { IDeleteForMessage } from "../../users/types";
import { Stack } from "@inubekit/stack";

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
        <Link to={`complete-invitation/${invitationId}`}>
          <Stack justifyContent="space-around">
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
        <ResendInvitation invitation={invitation} showComplete={smallScreen} />
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
