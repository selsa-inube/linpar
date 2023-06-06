import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";

function PayrollsFormUI(props) {
  const {
    payrolls,
    currentPayrolls,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangePayrolls,
    withSubmitButtons,
  } = props;

  const hasChanges =
    JSON.stringify(currentPayrolls) === JSON.stringify(payrolls);

  if (withSubmitButtons) {
    return (
      <FormButtons
        disabledButtons={hasChanges}
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
