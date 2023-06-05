import { useState } from "react";
import { ProjectsFormUI } from "./interface";

function ProjectsForm(props) {
  const { currentProjects, handleSubmit, withSubmitButtons } = props;
  const [projects, setProjects] = useState(currentProjects);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeProjects = (projects) => {
    setProjects(projects);
    if (!withSubmitButtons) handleSubmit(projects);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    // If this function is async, the form will be submitted before the state is updated
    handleSubmit(projects);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setProjects(currentProjects);
  };

  return (
    <ProjectsFormUI
      handleChangeProjects={handleChangeProjects}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      currentProjects={currentProjects}
      projects={projects}
      withSubmitButtons={withSubmitButtons}
    />
  );
}

export { ProjectsForm };
