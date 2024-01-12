import { FormButtons } from "@components/forms/submit/FormButtons";
import { SectionMessage, Stack, Text, inube, Grid } from "@inube/design-system";
import { StyledMessageContainer } from "./styles";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { assignmentFormMessages } from "@src/pages/privileges/outlets/users/edit-user/config/messages.config";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";

const renderMessage = (
  message: IMessageState,
  onCloseSectionMessage: PrimaryFormUIProps["onCloseSectionMessage"]
) => {
  if (!message.visible || !message.type) {
    return null;
  }

  const { title, description, icon, appearance } =
    assignmentFormMessages[message.type as keyof typeof assignmentFormMessages];

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="100%">
        <SectionMessage
          title={title}
          description={description}
          icon={icon}
          appearance={appearance}
          duration={4000}
          closeSectionMessage={onCloseSectionMessage}
        />
      </Stack>
    </StyledMessageContainer>
  );
};

interface PrimaryFormUIProps {
  textConfig: any;
  palette: typeof inube;
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangePrimaryTokens: (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: any) => boolean;
  readOnly?: boolean;
}

function PrimaryFormUI(props: PrimaryFormUIProps) {
  const {
    textConfig,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangePrimaryTokens,
    message,
    palette,
    onCloseSectionMessage,
    hasChanges,
  } = props;

  const colorCards = Object.entries(textConfig.status);

  return (
    <>
      <Text size="medium" padding="0px 0px 0px 0px" appearance="gray">
        {textConfig.description}
      </Text>

      <FormButtons
        disabledButtons={!hasChanges(textConfig)}
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
                palette={palette}
                title={config.title}
                description={config.description}
                appearance={"primary"}
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
      {renderMessage(message, onCloseSectionMessage)}
    </>
  );
}

export { PrimaryFormUI };
