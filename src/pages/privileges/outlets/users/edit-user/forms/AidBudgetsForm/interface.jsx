import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";

function AidBudgetsFormUI(props) {
  const {
    aidBudgets,
    currentAidBudgets,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeAidBudgets,
    withSubmitButtons,
  } = props;

  const hasChanges =
    JSON.stringify(currentAidBudgets) === JSON.stringify(aidBudgets);

  if (withSubmitButtons) {
    return (
      <FormButtons
        disabledButtons={hasChanges}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        isLoading={isLoading}
      >
        <AssignmentForm
          handleChange={handleChangeAidBudgets}
          entries={aidBudgets}
          title="Seleccione los presupuestos que desea asignar"
        />
      </FormButtons>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeAidBudgets}
      entries={aidBudgets}
      title="Seleccione los presupuestos que desea asignar"
    />
  );
}

export { AidBudgetsFormUI };
