import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";

interface InitializerFormUIProps {
  dataOptionsForms: IAssignmentFormEntry[];
  isLoading: boolean;
  handleReset: () => void;
  handleChangeInitializerForm: (
    dataOptionsForms: IAssignmentFormEntry[]
  ) => void;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
  readOnly?: boolean;
  setChangedData?: (changeData: IAssignmentFormEntry[]) => void;
  changeData?: IAssignmentFormEntry[];
}

export function InitializerFormUI(props: InitializerFormUIProps) {
  const {
    dataOptionsForms,
    handleChangeInitializerForm,
    setChangedData = () => {},
    changeData = [],
  } = props;

  return (
    <AssignmentForm
      handleChange={handleChangeInitializerForm}
      entries={dataOptionsForms}
      title="Seleccione las opciones que desea asignar:"
      setChangedData={setChangedData}
      changeData={changeData}
    />
  );
}
