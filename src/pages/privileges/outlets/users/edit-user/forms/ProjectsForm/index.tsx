import { useState } from "react";
import { ProjectsFormUI } from "./interface";
import { IAssignmentFormEntry } from "../../../types/forms.types";
import { EMessageType } from "@src/types/messages.types";

interface ProjectsFormProps {
  currentProjects: IAssignmentFormEntry[];
  handleSubmit: (newProjects: IAssignmentFormEntry[]) => void;
  withSubmitButtons: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
}

function ProjectsForm(props: ProjectsFormProps) {
  const { currentProjects, handleSubmit, withSubmitButtons, onHasChanges } =
    props;
  const [projects, setProjects] =
    useState<IAssignmentFormEntry[]>(currentProjects);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    visible: false,
    type: "" as EMessageType,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(currentProjects) !== JSON.stringify(valueCompare);

  const handleChangeProjects = (projects: IAssignmentFormEntry[]) => {
    setProjects(projects);
    if (onHasChanges) onHasChanges(hasChanges(projects));
    if (!withSubmitButtons) handleSubmit(projects);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(projects);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, 1500);
  };

  const handleReset = () => {
    setProjects(currentProjects);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
      type: "" as EMessageType,
    });
  };

  return (
    <ProjectsFormUI
      handleChangeProjects={handleChangeProjects}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      //currentProjects={currentProjects}
      projects={projects}
      withSubmitButtons={withSubmitButtons}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export type { ProjectsFormProps };
export { ProjectsForm };
