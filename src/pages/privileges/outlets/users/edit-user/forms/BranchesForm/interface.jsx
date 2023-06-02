import { FormControl } from "@components/forms/submit/FormControl";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";

function BranchesFormUI(props) {
  const {
    branches,
    currentBranches,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeBranches,
  } = props;

  const hasChanges =
    JSON.stringify(currentBranches) === JSON.stringify(branches);

  return (
    <FormControl
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
    </FormControl>
  );
}

export { BranchesFormUI };
