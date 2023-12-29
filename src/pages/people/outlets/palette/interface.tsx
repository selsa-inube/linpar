import {
  Breadcrumbs,
  Grid,
  SectionMessage,
  Stack,
  useMediaQuery,
  inube,
  Text,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";

import { StyledMessageContainer, StyledContainer } from "./styles";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { privilegeUserTabsConfig } from "@src/pages/privileges/outlets/users/config/usersTabs.config";
import { menuInvitationLinks } from "@src/pages/privileges/outlets/users/config/menuInvitation.config";
import { InvitationsTab } from "@src/pages/privileges/outlets/users/tabs/invitations";
import { UsersTab } from "@src/pages/privileges/outlets/users/tabs/users";
import { peopleOptionsConfig } from "../options/config/people.config";
import { TokenColorCard } from "@src/components/cards/TokenColorCard";

const renderMessage = (
  message: IUsersMessage,
  handleCloseMessage: () => void
) => {
  if (!message.data) return null;

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="98%">
        <SectionMessage
          title={message.data.title}
          description={message.data.description}
          icon={message.data.icon}
          appearance={message.data.appearance}
          duration={4000}
          closeSectionMessage={handleCloseMessage}
        />
      </Stack>
    </StyledMessageContainer>
  );
};

interface UsersUIProps {
  isSelected: string;
  searchText: string;
  handleTabChange: (id: string) => void;
  handleSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: boolean;
  handleToggleMenuInvitation: () => void;
  handleCloseMenuInvitation: () => void;
  message: IUsersMessage;
  handleCloseMessage: () => void;
}

export function PaletteUI(props: UsersUIProps) {
  const {
    isSelected,
    searchText,
    handleTabChange,
    handleSearchText,
    showMenu,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    message,
    handleCloseMessage,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  function handleCardClick(tokenName: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        padding={smallScreen ? "s300" : "s400 s800"}
      >
        <Stack gap="48px" direction="column">
          <Stack gap="24px" direction="column">
            <Breadcrumbs crumbs={peopleOptionsConfig[0].crumbs} />
            <PageTitle
              title={peopleOptionsConfig[0].label}
              description={peopleOptionsConfig[0].description}
              navigatePage="/people"
            />
          </Stack>
          <StyledContainer>
            <Stack gap="32px" direction="column">
              {Object.entries(inube.color.palette).map(([category, tokens]) => (
                <Stack key={category} gap="32px" direction="column">
                  <Text size="medium" textAlign="start" appearance="dark">
                    {category}
                  </Text>
                  <StyledContainer>
                    <Grid
                      templateColumns="1fr 1fr 1fr"
                      gap="s150"
                      autoColumns="unset"
                      autoRows="unset"
                    >
                      {Object.entries(tokens).map(([tokenName, tokenValue]) => (
                        <TokenColorCard
                          key={tokenName}
                          tokenName={tokenName}
                          tokenDescription={"Color token"}
                          onClick={handleCardClick}
                        />
                      ))}
                    </Grid>
                  </StyledContainer>
                </Stack>
              ))}
            </Stack>
          </StyledContainer>
        </Stack>
        {renderMessage(message, handleCloseMessage)}
      </Stack>
    </>
  );
}
