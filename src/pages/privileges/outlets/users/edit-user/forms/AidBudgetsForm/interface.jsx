import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";

function AidBudgetsFormUI(props) {
  const {
    aidBudgetUnits,
    currentAidBudgetUnits,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeAidBudgets,
    withSubmitButtons,
  } = props;

  const hasChanges =
    JSON.stringify(currentAidBudgetUnits) === JSON.stringify(aidBudgetUnits);

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
          entries={aidBudgetUnits}
          title="Seleccione los presupuestos que desea asignar"
        />
      </FormButtons>
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
