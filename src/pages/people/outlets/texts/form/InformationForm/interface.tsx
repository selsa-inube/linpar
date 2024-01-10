import { FormButtons } from "@components/forms/submit/FormButtons";
import { SectionMessage, Stack, Text, inube } from "@inube/design-system";

import { StyledMessageContainer } from "./styles";
import { assignmentFormMessages } from "@src/pages/privileges/outlets/users/edit-user/config/messages.config";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";
import { textFormsConfig } from "../../config/text.config";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";

const renderMessage = (
  message: IMessageState,
  onCloseSectionMessage: InformationFormUIProps["onCloseSectionMessage"]
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

interface InformationFormUIProps {
  aidBudgetUnits: IAssignmentFormEntry[];
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeInformation: (aidBudgetUnits: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
  readOnly?: boolean;
}

function InformationFormUI(props: InformationFormUIProps) {
  const {
    aidBudgetUnits,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeInformation,
    withSubmitButtons,
    message,
    onCloseSectionMessage,
    hasChanges,
    readOnly,
  } = props;
  const informationConfig = Object.entries(textFormsConfig.info.status);

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
          {informationConfig.map(([key, config]) => (
            <FieldsetColorCard
              key={key}
              title={config.title}
              description={config.description}
              tokenName={config.tokenName}
              tokenDescription={config.example}
              onClick={function (tokenName: string, color: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
        </Stack>
      </FormButtons>
      {renderMessage(message, onCloseSectionMessage)}
    </>
  );
}

export { InformationFormUI };
