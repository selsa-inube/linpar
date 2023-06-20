import { useState } from "react";
import { ProjectsFormUI } from "./interface";

function ProjectsForm(props) {
  const { currentProjects, handleSubmit, withSubmitButtons } = props;
  const [projects, setProjects] = useState(currentProjects);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    visible: false,
    type: "",
  });

  const handleChangeProjects = (projects) => {
    setProjects(projects);
    if (!withSubmitButtons) handleSubmit(projects);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(projects);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: "success",
      });
    }, 1500);
  };

  const handleReset = () => {
    setProjects(currentProjects);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
      type: "",
    });
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
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
    />
  );
}

export { ProjectsForm };
