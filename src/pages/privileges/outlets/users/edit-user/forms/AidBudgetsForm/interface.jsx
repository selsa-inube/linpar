import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import { SectionMessage } from "@src/components/feedback/SectionMessage";
import { assignmentFormMessages } from "../../config/messages.config";

const renderMessage = (message, onCloseSectionMessage) => {
  if (!message.visible) {
    return null;
  }

  const { title, description, icon, appearance } =
    assignmentFormMessages[message.type];

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

function AidBudgetsFormUI(props) {
  const {
    aidBudgetUnits,
    currentAidBudgetUnits,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeAidBudgets,
    withSubmitButtons,
    message,
    onCloseSectionMessage,
  } = props;

  const hasChanges =
    JSON.stringify(currentAidBudgetUnits) === JSON.stringify(aidBudgetUnits);

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          disabledButtons={hasChanges}
          handleSubmit={handleSubmitForm}
          handleReset={handleReset}
          isLoading={isLoading}
        >
          <AssignmentForm
            handleChange={handleChangeAidBudgets}
            entries={aidBudgetUnits}
            title="Seleccione los presupuestos que desea asignar"
          />
        </FormButtons>
        {renderMessage(message, onCloseSectionMessage)}
      </>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeAidBudgets}
      entries={aidBudgetUnits}
      title="Seleccione los presupuestos que desea asignar"
    />
  );
}

export { AidBudgetsFormUI };
