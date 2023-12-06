import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import { SectionMessage, Stack } from "@inube/design-system";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";
import { assignmentFormMessages } from "../../config/messages.config";

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
    <Stack justifyContent="flex-end" width="100%">
      <SectionMessage
        title={title}
        description={description}
        icon={icon}
        appearance={appearance}
        duration={4000}
        closeSectionMessage={onCloseSectionMessage}
      />
    </Stack>
  );
};

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
  readOnly?: boolean;
}

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
    readOnly,
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          disabledButtons={!hasChanges(projects)}
          handleSubmit={handleSubmitForm}
          handleReset={handleReset}
          loading={isLoading}
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
      readOnly={readOnly}
    />
  );
}

export { ProjectsFormUI };
