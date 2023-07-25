import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import { SectionMessage } from "@src/components/feedback/SectionMessage";
import { assignmentFormMessages } from "../../config/messages.config";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";

interface PayrollsFormUIProps {
  payrolls: IAssignmentFormEntry[];
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangePayrolls: (payrolls: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
}

const renderMessage = (
  message: IMessageState,
  onCloseSectionMessage: PayrollsFormUIProps["onCloseSectionMessage"]
) => {
  if (!message.visible || !message.type) {
    return null;
  }

  const { title, description, icon, appearance } =
    assignmentFormMessages[message.type as keyof typeof assignmentFormMessages];

  return (
    <SectionMessage
      title={title}
      description={description}
      icon={icon}
      appearance={appearance}
      duration={10000}
      closeSectionMessage={onCloseSectionMessage}
    />
  );
};

function PayrollsFormUI(props: PayrollsFormUIProps) {
  const {
    payrolls,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangePayrolls,
    withSubmitButtons,
    message,
    onCloseSectionMessage,
    hasChanges,
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          disabledButtons={!hasChanges(payrolls)}
          handleSubmit={handleSubmitForm}
          handleReset={handleReset}
          isLoading={isLoading}
        >
          <AssignmentForm
            handleChange={handleChangePayrolls}
            entries={payrolls}
            title="Seleccione los conceptos de nómina que desea asignar"
          />
        </FormButtons>
        {renderMessage(message, onCloseSectionMessage)}
      </>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangePayrolls}
      entries={payrolls}
      title="Seleccione los conceptos de nómina que desea asignar"
    />
  );
}

export { PayrollsFormUI };
