import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Table } from "@inube/design-system";
import { useMediaQuery } from "@inubekit/hooks";
import {
  usersBreakPointsConfig,
  usersTitlesConfig,
} from "@pages/privileges/outlets/users/config/usersTable.config";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IGeneralInformationUsersForm } from "@services/users/users.types";
import { getUsers } from "@services/users/getUsers";
import { RenderMessage } from "@components/feedback/RenderMessage";

import { actionsConfigUsers } from "./config/dataUsers.config";

import { IMessageState } from "../../types/forms.types";
import { deleteUserMessages } from "./DeleteModal/config/deleteLinixUsers.config";
import { IDeleteForMessage } from "./types";

interface UsersTabProps {
  searchText: string;
}

function UsersTab(props: UsersTabProps) {
  const { searchText } = props;
  const [users, setUsers] = useState<IGeneralInformationUsersForm[]>([]);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [idDeleted, setIdDeleted] = useState<IDeleteForMessage>({
    id: "",
    successfulDiscard: false,
  });

  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();

  const linixUsersData = async () => {
    if (!user) return;
    if (users.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getUsers();
        setUsers(newUsers);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    linixUsersData();
  }, [user]);

  useEffect(() => {
    const messageType = idDeleted.successfulDiscard
      ? deleteUserMessages.success
      : deleteUserMessages.failed;

    setMessage({
      visible: true,
      data: messageType,
    });
  }, [idDeleted]);

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
    const filterDiscardPublication = users.filter(
      (user) => user.k_Usuari !== idDeleted.id
    );

    idDeleted.successfulDiscard && setUsers(filterDiscardPublication);
  };

  const smallScreen = useMediaQuery("(max-width: 850px)");

  return (
    <>
      {loading ? (
        <LoadingApp />
      ) : (
        <Table
          id="portal"
          titles={usersTitlesConfig}
          actions={actionsConfigUsers(smallScreen, users, setIdDeleted)}
          entries={users}
          breakpoints={usersBreakPointsConfig}
          filter={searchText}
          modalTitle="Usuario"
        />
      )}
      {idDeleted && idDeleted.id && message.visible && (
        <RenderMessage
          message={message}
          handleCloseMessage={handleCloseSectionMessage}
          onMessageClosed={handleCloseSectionMessage}
        />
      )}
    </>
  );
}

export { UsersTab };
