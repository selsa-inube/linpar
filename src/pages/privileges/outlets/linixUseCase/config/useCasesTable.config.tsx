import { MdModeEdit, MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { Icon } from "@inube/design-system";
import { Link } from "react-router-dom";
import { linixUseCases } from "@src/mocks/privileges/linixUseCases/LinixUseCases.mock";
import { DeleteUser } from "../../users/tabs/users/DeleteUser";

const useCasesBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1090px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1002px)", totalColumns: 2 },
  { breakpoint: "(max-width: 837px)", totalColumns: 3 },
  { breakpoint: "(max-width: 550px)", totalColumns: 2 },
  { breakpoint: "(max-width: 360px)", totalColumns: 1 },
];

const titlesOptions = [
  {
    id: "code",
    titleName: "Code",
    priority: 0,
  },

  {
    id: "linixUseCaseName",
    titleName: "Nombre",
    priority: 1,
  },

  {
    id: "Type",
    titleName: "Tipo",
    priority: 2,
  },
];

const handleClick = (id: string) => {
  linixUseCases.find((useCase) => useCase.id === id);
};

const actionsConfig = [
  {
    id: "Details",
    actionName: "Detalles",
    content: ({ id }: { id: string }) => (
      <Link to={`details/${id}`} onClick={() => handleClick(id)}>
        <Icon
          appearance="dark"
          cursorHover
          icon={<MdOutlineAssignmentTurnedIn />}
        />
      </Link>
    ),
    type: "secondary",
  },
  {
    id: "Edit",
    actionName: "Editar",
    content: ({ id }: { id: string }) => (
      <Link to={`edit/${id}`} onClick={() => handleClick(id)}>
        <Icon appearance="dark" cursorHover icon={<MdModeEdit />} />
      </Link>
    ),
    type: "primary",
  },
  {
    id: "Delete",
    actionName: "Eliminar",
    content: ({ id }: { id: string }) => (
      <DeleteUser
        user={linixUseCases.find((useCase) => useCase.id === id)}
        handleDeleteUser={() => {}}
        showComplete={false}
        closeModal={() => {}}
      />
    ),
    type: "remove",
  },
];

export { useCasesBreakPointsConfig, titlesOptions, actionsConfig };
