import { Link } from "react-router-dom";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { deleteItemData } from "@mocks/utils/dataMock.service";
import { IEntry } from "@src/components/data/TableLinpar/types";
import { Icon } from "@inubekit/icon";
import { Text } from "@inubekit/text";
import { IInvitationsEntry } from "@services/users/invitation.types";
import { Stack } from "@inubekit/stack";
import { ResendInvitation } from "../ResendInvitation";
import { deleteInvitationModal } from "../DeleteInvitation/config/deleteInvitation.config";
import { DeleteLinixInvitation } from "../DeleteInvitation";
import { IDeleteForMessage } from "../../users/types";
import { StyledContainerEdit } from "../../users/styles";

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
      content: (entry: IEntry) => {
        const isDisabled =
          entry.status === "sent" || entry.status === "processed";

        return (
          <StyledContainerEdit>
            {!isDisabled ? (
              <Link to={`complete-invitation/${entry.invitationId}`}>
                <Stack justifyContent="space-around">
                  <Icon
                    appearance={isHovered ? "primary" : "dark"}
                    parentHover={isHovered}
                    icon={<MdOutlineAssignmentTurnedIn />}
                    cursorHover
                    size="16px"
                  />
                  {smallScreen && <Text size="small">Completar</Text>}
                </Stack>
              </Link>
            ) : (
              <Stack justifyContent="space-around">
                <Icon
                  appearance="dark"
                  icon={<MdOutlineAssignmentTurnedIn />}
                  disabled
                  size="16px"
                />
                {smallScreen && (
                  <Text size="small" disabled>
                    Completar
                  </Text>
                )}
              </Stack>
            )}
          </StyledContainerEdit>
        );
      },
      type: "gray",
    },
    {
      id: "Resend",
      actionName: "Reenviar",
      content: (invitation: IEntry) => (
        <ResendInvitation
          invitation={invitation as IInvitationsEntry}
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
      content: (entry: IEntry) => (
        <DeleteLinixInvitation
          deleteLinixInvitationModal={deleteInvitationModal}
          linixInvitation={entry.invitationId}
          nameLinixInvitation={entry.userIdentification}
          handleDeleteLinixInvitation={deleteItemData}
          setIdDeleted={setIdDeleted}
        />
      ),
      type: "error",
    },
  ];
  return invitationsTableActions;
};
