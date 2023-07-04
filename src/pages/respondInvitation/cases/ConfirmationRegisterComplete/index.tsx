import { ErrorPage } from "@src/components/layout/ErrorPage";
import { clientsDataMock } from "@src/mocks/login/clients.mock";
import { useParams } from "react-router-dom";

function ConfirmationRegisterComplete() {
  const { client_id } = useParams();

  const getClientData = () => {
    if (!client_id) return;
    return clientsDataMock.find(
      (clientMock) => clientMock.id === parseInt(client_id)
    );
  };

  const clientData = getClientData();
  return clientData ? (
    <ErrorPage
      logo={clientData.logo}
      logoAlt={`Logo ${clientData.name}`}
      heading={`Gracias! Registro completado...`}
      description="Hemos enviado la información, revisa tu correo electrónico para ingresar a nuestra plataforma."
      imageAlt="Su registro se ha realizado correctamente."
    />
  ) : (
    <ErrorPage />
  );
}

export { ConfirmationRegisterComplete };
