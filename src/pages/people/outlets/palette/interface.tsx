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

import { StyledMessageContainer, StyledGridContainer } from "./styles";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { peopleOptionsConfig } from "../options/config/people.config";
import { TokenColorCard } from "@src/components/cards/TokenColorCard";
import { FormButtons } from "@src/components/forms/submit/FormButtons";
import { useState } from "react";

interface PaletteUIProps {
  isLoading: boolean;
  handleSubmitForm: () => void;
  hasChanges: (valueToCompare: typeof inube) => boolean;
  message: IUsersMessage;
  handleCloseMessage: () => void;
}

interface renderCategoryGridProps {
  categories: any[];
  templateColumns: string;
  templateRows?: string;
  autoFlow?: string;
  hasBackground?: boolean;
  handleColorTokenClick: (tokenName: string, newColor: string) => void;
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
    hasBackground = false,
    handleColorTokenClick,
  } = props;
  return categories.map(([category, tokens]) => (
    <Stack key={category} gap="16px" direction="column">
      <Text
        size="medium"
        padding="0px 0px 0px 0px"
        textAlign="start"
        appearance="dark"
      >
        {category}
      </Text>
      <StyledGridContainer hasBackground={hasBackground}>
        <Grid
          templateColumns={templateColumns}
          templateRows={templateRows}
          gap="s050"
          autoColumns="unset"
          autoRows="unset"
          autoFlow={autoFlow}
        >
          {Object.entries(tokens).map(([tokenName, tokenValue]) => (
            <TokenColorCard
              key={tokenName}
              tokenName={tokenName}
              tokenDescription={"Token de color"}
              onClick={(tokenName, newColor) =>
                handleColorTokenClick(tokenName, newColor)
              }
            />
          ))}
        </Grid>
      </StyledGridContainer>
    </Stack>
  ));
}

export function PaletteUI(props: PaletteUIProps) {
  const {
    message,
    handleCloseMessage,
    isLoading,
    handleSubmitForm,
    hasChanges,
  } = props;

  const [colorTokens, setColorTokens] = useState(
    JSON.parse(JSON.stringify(inube.color.palette))
  );

  const handleColorTokenClick = (tokenName: string, newColor: string) => {
    setColorTokens((prevTokens: any) => {
      const updatedTokens = { ...prevTokens };
      for (const category in updatedTokens) {
        if (updatedTokens[category][tokenName] !== undefined) {
          updatedTokens[category][tokenName] = newColor;
          break;
        }
      }
      return updatedTokens;
    });
  };

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const paletteEntries = Object.entries(colorTokens);
  const firstTwoCategories = paletteEntries.slice(0, 1);
  const remainingCategories = paletteEntries.slice(2);

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
        <FormButtons
          disabledButtons={!hasChanges(colorTokens)}
          handleSubmit={handleSubmitForm}
          handleReset={() => {}}
          loading={isLoading}
        >
          <Stack direction="column" width="100%" gap="24px">
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
                hasBackground
                handleColorTokenClick={handleColorTokenClick}
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
                handleColorTokenClick={handleColorTokenClick}
              />
            </Grid>
          </Stack>
        </FormButtons>
      </Stack>
      {renderMessage(message, handleCloseMessage)}
    </Stack>
  );
}
