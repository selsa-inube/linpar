import { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useMediaQuery } from "@inubekit/hooks";
import {
  usersBreakPointsConfig,
  usersTitlesConfig,
} from "@pages/privileges/outlets/users/config/usersTable.config";
import { IEntry } from "@components/data/TableLinpar/types";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IGeneralInformationUsersForm } from "@services/users/users.types";
import { getUsers } from "@services/users/getUsers";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { LinparContext } from "@context/AppContext";
import { TableLinpar } from "@components/data/TableLinpar";
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
  const { linparData } = useContext(LinparContext);

  const linixUsersData = async () => {
    if (!user) return;
    if (users.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getUsers(
          linparData.businessUnit.businessUnitPublicCode
        );
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

  const dynamicTitlesOptions = smallScreen
    ? [
        {
          id: "a_Numnit",
          titleName: "Identificación",
          priority: 1,
        },
      ]
    : usersTitlesConfig;
  return (
    <>
      {loading ? (
        <LoadingApp />
      ) : (
        <TableLinpar
          id="portal"
          titles={dynamicTitlesOptions}
          actions={actionsConfigUsers(smallScreen, users, setIdDeleted)}
          entries={users as IEntry[]}
          breakpoints={usersBreakPointsConfig}
          filter={searchText}
          isLoading={loading}
          widthPercentageTotalColumns={80}
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
