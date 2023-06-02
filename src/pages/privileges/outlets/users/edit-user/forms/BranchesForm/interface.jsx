import { FormControl } from "@components/forms/submit/FormControl";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";

function BranchesFormUI(props) {
  const {
    branches,
    currentBranches,
    isLoading,
    handleSubmitForm,
    handleCancel,
    handleChangeBranches,
  } = props;

  const hasChanges =
    JSON.stringify(currentBranches) === JSON.stringify(branches);

  return (
    <FormControl
      disabledButtons={hasChanges}
      handleSubmit={handleSubmitForm}
      handleCancel={handleCancel}
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
