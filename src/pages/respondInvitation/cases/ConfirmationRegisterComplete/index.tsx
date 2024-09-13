import Completed from "@assets/images/Completed.png";
import { ErrorPage } from "@components/layout/ErrorPage";

import { businessUnitDataMock } from "@src/mocks/login/businessUnit.mock";
import { useParams } from "react-router-dom";

function ConfirmationRegisterComplete() {
  const { client_id } = useParams();

  const getClientData = () => {
    if (!client_id) return;
    return businessUnitDataMock.find(
      (clientMock) => clientMock.id === client_id
    );
  };

  const clientData = getClientData();
  return (
    <ErrorPage
      logo={clientData && clientData.logo}
      logoAlt={clientData && `Logo ${clientData.name}`}
      heading={`!Gracias! Registro completado...`}
      description="Hemos enviado la información, revisa tu correo electrónico para ingresar a nuestra plataforma."
      imageAlt="Su registro se ha realizado correctamente."
      image={Completed}
    />
  );
}

export { ConfirmationRegisterComplete };
