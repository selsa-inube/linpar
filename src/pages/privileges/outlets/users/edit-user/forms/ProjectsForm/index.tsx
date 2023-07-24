import { useState } from "react";
import { ProjectsFormUI } from "./interface";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";
import { EMessageType } from "@src/types/messages.types";

const LOADING_TIMEOUT = 1500;

interface ProjectsFormProps {
  currentProjects: IAssignmentFormEntry[];
  handleSubmit: (projects: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
}

function ProjectsForm(props: ProjectsFormProps) {
  const { currentProjects, handleSubmit, withSubmitButtons, onHasChanges } =
    props;
  const [projects, setProjects] = useState(currentProjects);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
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
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setProjects(currentProjects);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <ProjectsFormUI
      handleChangeProjects={handleChangeProjects}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
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
