import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import { SectionMessage, Stack } from "@inube/design-system";
import { assignmentFormMessages } from "../../config/messages.config";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";

const renderMessage = (
  message: IMessageState,
  onCloseSectionMessage: BranchesFormUIProps["onCloseSectionMessage"]
) => {
  if (!message.visible || !message.type) {
    return null;
  }

  const { title, description, icon, appearance } =
    assignmentFormMessages[message.type as keyof typeof assignmentFormMessages];

  return (
    <Stack justifyContent="flex-end" width="100%">
      <SectionMessage
        title={title}
        description={description}
        icon={icon}
        appearance={appearance}
        duration={10000}
        closeSectionMessage={onCloseSectionMessage}
      />
    </Stack>
  );
};

interface BranchesFormUIProps {
  branches: IAssignmentFormEntry[];
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeBranches: (branches: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
  readOnly?: boolean;
}

function BranchesFormUI(props: BranchesFormUIProps) {
  const {
    branches,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeBranches,
    withSubmitButtons,
    message,
    onCloseSectionMessage,
    hasChanges,
    readOnly,
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          disabledButtons={!hasChanges(branches)}
          handleSubmit={handleSubmitForm}
          handleReset={handleReset}
          loading={isLoading}
        >
          <AssignmentForm
            handleChange={handleChangeBranches}
            entries={branches}
            title="Seleccione las sucursales que desea asignar"
          />
        </FormButtons>
        {renderMessage(message, onCloseSectionMessage)}
      </>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeBranches}
      entries={branches}
      title="Seleccione las sucursales que desea asignar"
      readOnly={readOnly}
    />
  );
}

export { BranchesFormUI };
