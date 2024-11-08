import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EAppearance } from "@src/types/colors.types";
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
import { LinparContext } from "@context/AppContext";
import { useFlag } from "@inubekit/flag";
import { actionsConfigUsers } from "./config/dataUsers.config";
import { IDeleteForMessage } from "./types";
import { deleteUserMessages } from "./DeleteModal/config/deleteLinixUsers.config";

interface UsersTabProps {
  searchText: string;
}

function UsersTab(props: UsersTabProps) {
  const { searchText } = props;
  const [users, setUsers] = useState<IGeneralInformationUsersForm[]>([]);
  const navigate = useNavigate();
  const [idDeleted, setIdDeleted] = useState<IDeleteForMessage>({
    id: "",
    successfulDiscard: false,
  });

  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();
  const { linparData } = useContext(LinparContext);
  const { addFlag } = useFlag();
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
    if (idDeleted.id) {
      if (idDeleted.successfulDiscard) {
        addFlag({
          title: deleteUserMessages.success.title,
          description: deleteUserMessages.success.description,
          appearance: EAppearance.SUCCESS,
          duration: 5000,
        });
        setTimeout(() => {
          const filterDiscardPublication = users.filter(
            (user) => user.k_Usuari !== idDeleted.id
          );

          setUsers(filterDiscardPublication);
        }, 5000);
      } else {
        addFlag({
          title: deleteUserMessages.failed.title,
          description: deleteUserMessages.failed.description,
          appearance: EAppearance.DANGER,
          duration: 5000,
        });
      }
      setTimeout(() => {
        navigate("/privileges/users");
      }, 6000);
    }
  }, [idDeleted]);

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
    </>
  );
}

export { UsersTab };
