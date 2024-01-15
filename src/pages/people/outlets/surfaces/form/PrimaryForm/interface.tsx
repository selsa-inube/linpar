import { FormButtons } from "@components/forms/submit/FormButtons";
import { SectionMessage, Stack, Text, inube, Grid } from "@inube/design-system";
import { StyledMessageContainer } from "./styles";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";

const renderMessage = (
  message: IUsersMessage,
  handleCloseMessage: () => void,
  onMessageClosed: () => void
) => {
  if (!message.data) return null;

  const closeMessageAndExecuteCallback = () => {
    handleCloseMessage();
    onMessageClosed();
  };

  //const { title, description, icon, appearance } =
  //assignmentFormMessages[message.type as keyof typeof assignmentFormMessages];

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="100%">
        <SectionMessage
          title={message.data.title}
          description={message.data.description}
          icon={message.data.icon}
          appearance={message.data.appearance}
          duration={4000}
          closeSectionMessage={closeMessageAndExecuteCallback}
        />
      </Stack>
    </StyledMessageContainer>
  );
};

interface PrimaryFormUIProps {
  surfaceConfig: any;
  palette: typeof inube;
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangePrimaryTokens: any;
  message: IMessageState;
  hasChanges: () => boolean;
  handleCloseMessage: () => void;
  onMessageClosed: () => void;
}

function PrimaryFormUI(props: PrimaryFormUIProps) {
  const {
    surfaceConfig,
    isLoading,
    handleSubmitForm,
    handleReset,
    palette,
    handleChangePrimaryTokens,
    message,
    handleCloseMessage,
    onMessageClosed,
    hasChanges,
  } = props;

  const colorCards = Object.entries(surfaceConfig.status);

  return (
    <>
      <Text size="medium" padding="0px 0px 0px 0px" appearance="gray">
        {surfaceConfig.description}
      </Text>

      <FormButtons
        disabledButtons={!hasChanges()}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <Stack direction="column" gap={inube.spacing.s350}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap="s350"
            autoColumns="unset"
            autoRows="unset"
          >
            {colorCards.map(([key, config]: any) => (
              <FieldsetColorCard
                key={key}
                optionsMenu={palette}
                title={config.title}
                description={config.description}
                appearance={"primary"}
                typeToken="surface"
                category={key}
                textWithColorToken={config.example}
                onChange={(newTokenName) =>
                  handleChangePrimaryTokens("primary", key, newTokenName)
                }
              />
            ))}
          </Grid>
        </Stack>
      </FormButtons>
      {renderMessage(message, handleCloseMessage, onMessageClosed)}
    </>
  );
}

export { PrimaryFormUI };
