import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import { SectionMessage, Stack, Text, inube } from "@inube/design-system";

import { StyledMessageContainer } from "./styles";
import { textFormsConfig } from "../../config/text.config";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";
import { assignmentFormMessages } from "@src/pages/privileges/outlets/users/edit-user/config/messages.config";

const renderMessage = (
  message: IMessageState,
  onCloseSectionMessage: GrayFormUIProps["onCloseSectionMessage"]
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

interface GrayFormUIProps {
  aidBudgetUnits: IAssignmentFormEntry[];
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeGray: (aidBudgetUnits: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
  readOnly?: boolean;
}

function GrayFormUI(props: GrayFormUIProps) {
  const {
    aidBudgetUnits,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeGray,
    withSubmitButtons,
    message,
    onCloseSectionMessage,
    hasChanges,
    readOnly,
  } = props;

  const grayConfig = Object.entries(textFormsConfig.gray.status);

  return (
    <>
      <Text size="medium" padding="0px 0px 0px 0px" appearance="gray">
        {textFormsConfig.warning.description}
      </Text>
      <FormButtons
        disabledButtons={false}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <Stack direction="column" gap={inube.spacing.s350}>
          {grayConfig.map(([key, config]) => (
            <FieldsetColorCard
              key={key}
              title={config.title}
              description={config.description}
              tokenName={config.tokenName}
              tokenDescription={config.example}
              onChange={() => {}}
            />
          ))}
        </Stack>
      </FormButtons>
      {renderMessage(message, onCloseSectionMessage)}
    </>
  );
}

export { GrayFormUI };
