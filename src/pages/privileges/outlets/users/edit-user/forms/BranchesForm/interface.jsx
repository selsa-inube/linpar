import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";

function BranchesFormUI(props) {
  const {
    branches,
    currentBranches,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeBranches,
    withSubmitButtons,
  } = props;

  const hasChanges =
    JSON.stringify(currentBranches) === JSON.stringify(branches);

  if (withSubmitButtons) {
    return (
      <FormButtons
        disabledButtons={hasChanges}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        isLoading={isLoading}
      >
        <AssignmentForm
          handleChange={handleChangeBranches}
          entries={branches}
          title="Seleccione las sucursales que desea asignar"
        />
      </FormButtons>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeBranches}
      entries={branches}
      title="Seleccione las sucursales que desea asignar"
    />
  );
}

export { BranchesFormUI };
