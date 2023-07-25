import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import { SectionMessage } from "@src/components/feedback/SectionMessage";
import { assignmentFormMessages } from "../../config/messages.config";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";

interface ProjectsFormUIProps {
  projects: IAssignmentFormEntry[];
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeProjects: (projects: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
}

const renderMessage = (
  message: IMessageState,
  onCloseSectionMessage: ProjectsFormUIProps["onCloseSectionMessage"]
) => {
  if (!message.visible || !message.type) {
    return null;
  }
  const { title, description, icon, appearance } =
    assignmentFormMessages[message.type as keyof typeof assignmentFormMessages];

  return (
    <SectionMessage
      title={title}
      description={description}
      icon={icon}
      appearance={appearance}
      duration={10000}
      closeSectionMessage={onCloseSectionMessage}
    />
  );
};

function ProjectsFormUI(props: ProjectsFormUIProps) {
  const {
    projects,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeProjects,
    withSubmitButtons,
    message,
    onCloseSectionMessage,
    hasChanges,
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          disabledButtons={!hasChanges(projects)}
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
        {renderMessage(message, onCloseSectionMessage)}
      </>
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
