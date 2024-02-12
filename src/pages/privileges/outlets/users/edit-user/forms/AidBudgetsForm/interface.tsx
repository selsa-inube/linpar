import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";
import { RenderMessage } from "@src/components/layout/RenderMessage";

interface AidBudgetsFormUIProps {
  aidBudgetUnits: IAssignmentFormEntry[];
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeAidBudgets: (aidBudgetUnits: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
  readOnly?: boolean;
}

function AidBudgetsFormUI(props: AidBudgetsFormUIProps) {
  const {
    aidBudgetUnits,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeAidBudgets,
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
          disabledButtons={!hasChanges(aidBudgetUnits)}
          handleSubmit={handleSubmitForm}
          handleReset={handleReset}
          loading={isLoading}
        >
          <AssignmentForm
            handleChange={handleChangeAidBudgets}
            entries={aidBudgetUnits}
            title="Seleccione los presupuestos que desea asignar"
          />
        </FormButtons>
        {message.visible && (
          <RenderMessage
            message={message}
            handleCloseMessage={onCloseSectionMessage}
            onMessageClosed={handleReset}
          />
        )}
      </>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeAidBudgets}
      entries={aidBudgetUnits}
      title="Seleccione los presupuestos que desea asignar"
      readOnly={readOnly}
    />
  );
}

export { AidBudgetsFormUI };
