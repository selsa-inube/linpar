import { CompleteRegisterUI } from "./interface";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "@inube/design-system";
import { invitationEntriesDataMock } from "../../../../../mocks/apps/privileges/invitations.mock";

function CompleteRegister() {
  const { id } = useParams();
  const smallScreen = useMediaQuery("(max-width: 580px)");
  const foundEntry = invitationEntriesDataMock.find((entry) => entry.id == id);
  const subjectCardData = {
    Nombre: foundEntry?.username || "",
    Identificación: foundEntry?.userID || "",
    Correo: foundEntry?.mail || "",
    Invitación: foundEntry?.invitationDate || "",
  };
  return (
    <CompleteRegisterUI
      smallScreen={smallScreen}
      subjectCardData={subjectCardData}
    />
  );
}

export { CompleteRegister };
