import { useEffect, useState } from "react";

import {
  Table,
  useMediaQuery,
  SectionMessage,
  Stack,
} from "@inube/design-system";
import {
  usersBreakPointsConfig,
  usersTitlesConfig,
} from "@pages/privileges/outlets/users/config/usersTable.config";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { EAppearance } from "@src/types/colors.types";
import { IMessage } from "@src/types/messages.types";
import { IGeneralInformationEntry } from "@src/services/users/users.types";
import { getAll } from "@mocks/utils/dataMock.service";

import { StyledMessageContainer } from "./styles";
import { actionsConfigUsers } from "./config/dataUsers.config";

const initialMessageState: IMessage = {
  show: false,
  title: "",
  description: "",
  icon: <></>,
  appearance: "" as EAppearance,
};

interface UsersTabProps {
  searchText: string;
}

function UsersTab(props: UsersTabProps) {
  const { searchText } = props;
  const [users, setUsers] = useState<IGeneralInformationEntry[]>([]);
  const [message, setMessage] = useState(initialMessageState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAll("linix-users")
      .then((data) => {
        if (data !== null) {
          setUsers(data as IGeneralInformationEntry[]);
        }
      })
      .catch((error) => {
        console.info(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [users]);

  const onCloseMessage = () => {
    setMessage(initialMessageState);
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
          actions={actionsConfigUsers(smallScreen, users)}
          entries={users}
          breakpoints={usersBreakPointsConfig}
          filter={searchText}
          modalTitle="Usuario"
        />
      )}
      {message.show && (
        <StyledMessageContainer>
          <Stack justifyContent="flex-end" width="100%">
            <SectionMessage
              title={message.title}
              description={message.description}
              icon={message.icon}
              appearance={message.appearance}
              duration={4000}
              closeSectionMessage={onCloseMessage}
            />
          </Stack>
        </StyledMessageContainer>
      )}
    </>
  );
}

export { UsersTab };
