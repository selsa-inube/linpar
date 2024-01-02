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

import {
  StyledMessageContainer,
  StyledContainer,
  StyledGridContainer,
} from "./styles";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { peopleOptionsConfig } from "../options/config/people.config";
import { TokenColorCard } from "@src/components/cards/TokenColorCard";

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

interface renderCategoryGridProps {
  categories: any[];
  templateColumns: string;
  templateRows?: string;
  autoFlow?: string;
  handleCardClick: any;
  hasBackground?: boolean;
}

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

function RenderCategoryGrid(props: renderCategoryGridProps) {
  const {
    categories,
    templateColumns,
    templateRows = "auto",
    autoFlow = "row",
    handleCardClick,
    hasBackground = false,
  } = props;
  return categories.map(([category, tokens]: any) => (
    <Stack key={category} gap="32px" direction="column">
      <Text size="medium" textAlign="start" appearance="dark">
        {category}
      </Text>
      <StyledGridContainer hasBackground={hasBackground}>
        <Grid
          templateColumns={templateColumns}
          templateRows={templateRows}
          gap="s150"
          autoColumns="unset"
          autoRows="unset"
          autoFlow={autoFlow}
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
      </StyledGridContainer>
    </Stack>
  ));
}

export function PaletteUI(props: UsersUIProps) {
  const { message, handleCloseMessage } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const paletteEntries = Object.entries(inube.color.palette);
  const firstTwoCategories = paletteEntries.slice(0, 2);
  const remainingCategories = paletteEntries.slice(2);
  function handleCardClick(tokenName: string): void {
    throw new Error("Function not implemented.");
  }

  return (
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
          <Grid
            templateColumns="1fr"
            gap="s150"
            autoColumns="unset"
            autoRows="unset"
          >
            <RenderCategoryGrid
              categories={firstTwoCategories}
              templateColumns="repeat(3, 1fr)"
              templateRows="repeat(7, 1fr)"
              autoFlow="column"
              handleCardClick={handleCardClick}
              hasBackground
            />
          </Grid>

          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap="s150"
            autoColumns="unset"
            autoRows="unset"
          >
            <RenderCategoryGrid
              categories={remainingCategories}
              templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
              handleCardClick={handleCardClick}
            />
          </Grid>
        </StyledContainer>
      </Stack>
      {renderMessage(message, handleCloseMessage)}
    </Stack>
  );
}
