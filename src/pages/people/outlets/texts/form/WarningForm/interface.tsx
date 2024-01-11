import { FormButtons } from "@components/forms/submit/FormButtons";
import { SectionMessage, Stack, Text, inube } from "@inube/design-system";

import { StyledMessageContainer } from "./styles";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { assignmentFormMessages } from "@src/pages/privileges/outlets/users/edit-user/config/messages.config";
import { textFormsConfig } from "../../config/text.config";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";

const renderMessage = (
  message: IMessageState,
  onCloseSectionMessage: WarningTokensFormUIProps["onCloseSectionMessage"]
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

interface WarningTokensFormUIProps {
  textConfig: any;
  isLoading: boolean;
  palette: typeof inube;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeWarningTokens: (
    appearance: Appearance,
    category: string,
    tokenName: string
  ) => void;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: any) => boolean;
  readOnly?: boolean;
}

function WarningFormUI(props: WarningTokensFormUIProps) {
  const {
    textConfig,
    isLoading,
    palette,
    handleSubmitForm,
    handleReset,
    handleChangeWarningTokens,
    message,
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
          {colorCards.map(([key, config]: any) => (
            <FieldsetColorCard
              key={key}
              palette={palette}
              title={config.title}
              description={config.description}
              appearance={"warning"}
              category={key}
              textWithColorToken={config.example}
              onChange={(newTokenName) =>
                handleChangeWarningTokens("warning", key, newTokenName)
              }
            />
          ))}
        </Stack>
      </FormButtons>
      {renderMessage(message, onCloseSectionMessage)}
    </>
  );
}

export { WarningFormUI };
