import { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Table } from "@inube/design-system";
import { useMediaQuery } from "@inubekit/hooks";
import { getInvitations } from "@services/invitations/getInvitations";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IInvitationsEntry } from "@services/users/invitation.types";
import { LinparContext } from "@src/context/AppContext";
import { EAppearance } from "@src/types/colors.types";
import { useFlag } from "@inubekit/flag";

import {
  invitationsTableBreakpoints,
  invitationsTableTitles,
} from "../../config/invitationsTable.config";
import { actionsConfigInvitation } from "./config/dataInvitation";
import { deleteInvitationMessages } from "./DeleteInvitation/config/deleteInvitation.config";
import { IDeleteForMessage } from "../users/types";

interface InvitationsTabProps {
  searchText: string;
}

function InvitationsTab(props: InvitationsTabProps) {
  const { searchText } = props;
  const { addFlag } = useFlag();
  const [idDeleted, setIdDeleted] = useState<IDeleteForMessage>({
    id: "",
    successfulDiscard: false,
  });
  const [loading, setLoading] = useState(true);
  const [invitations, setInvitations] = useState<IInvitationsEntry[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 850px)");
  const { user } = useAuth0();
  const { linparData } = useContext(LinparContext);
  const linixInvitationsData = async () => {
    if (!user) return;
    if (invitations.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getInvitations(
          linparData.businessUnit.businessUnitPublicCode
        );
        setInvitations(newUsers);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    linixInvitationsData();
  }, [user]);

  useEffect(() => {
    if (idDeleted.id) {
      if (idDeleted.successfulDiscard) {
        addFlag({
          title: deleteInvitationMessages.success.title,
          description: deleteInvitationMessages.success.description,
          appearance: EAppearance.SUCCESS,
          duration: 5000,
        });
        setTimeout(() => {
          const filterDiscardPublication = invitations.filter(
            (invitations) => invitations.invitationId !== idDeleted.id
          );
          setInvitations(filterDiscardPublication);
        }, 5000);
      } else {
        addFlag({
          title: deleteInvitationMessages.failed.title,
          description: deleteInvitationMessages.failed.description,
          appearance: EAppearance.DANGER,
          duration: 5000,
        });
      }
    }
  }, [idDeleted]);

  return (
    <>
      {loading ? (
        <LoadingApp />
      ) : (
        <Table
          id="portal"
          titles={invitationsTableTitles}
          entries={invitations}
          actions={actionsConfigInvitation(
            isHovered,
            setIsHovered,
            smallScreen,
            setIdDeleted
          )}
          breakpoints={invitationsTableBreakpoints}
          filter={searchText}
          modalTitle="Invitación"
        />
      )}
    </>
  );
}

export { InvitationsTab };
