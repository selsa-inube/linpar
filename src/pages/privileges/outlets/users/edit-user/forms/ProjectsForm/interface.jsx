import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";

function ProjectsFormUI(props) {
  const {
    projects,
    currentProjects,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeProjects,
    withSubmitButtons,
  } = props;

  const hasChanges =
    JSON.stringify(currentProjects) === JSON.stringify(projects);

  if (withSubmitButtons) {
    return (
      <FormButtons
        disabledButtons={hasChanges}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        isLoading={isLoading}
      >
        <AssignmentForm
          handleChange={handleChangeProjects}
          entries={projects}
          title="Seleccione los proyectos que desea asignar"
        />
      </FormButtons>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeProjects}
      entries={projects}
      title="Seleccione los proyectos que desea asignar"
    />
  );
}

export { ProjectsFormUI };
