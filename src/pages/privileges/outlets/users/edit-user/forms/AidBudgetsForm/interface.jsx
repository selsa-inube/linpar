import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";

function AidBudgetsFormUI(props) {
  const {
    aidBudgetsUnits,
    currentAidBudgetsUnits,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeAidBudgets,
    withSubmitButtons,
  } = props;

  const hasChanges =
    JSON.stringify(currentAidBudgetsUnits) === JSON.stringify(aidBudgetsUnits);

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
          entries={aidBudgetsUnits}
          title="Seleccione los presupuestos que desea asignar"
        />
      </FormButtons>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeAidBudgets}
      entries={aidBudgetsUnits}
      title="Seleccione los presupuestos que desea asignar"
    />
  );
}

export { AidBudgetsFormUI };
