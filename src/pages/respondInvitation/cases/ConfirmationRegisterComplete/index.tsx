import Completed from "@assets/images/Completed.png";
import { ErrorPage } from "@components/layout/ErrorPage";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";
import { useParams } from "react-router-dom";

function ConfirmationRegisterComplete() {
  const { bussinessData_id } = useParams();

  const getClientData = () => {
    if (!bussinessData_id) return;
    return businessUnitDataMock.find(
      (businessMock) => businessMock.id === bussinessData_id
    );
  };

  const bussinessData = getClientData();
  return (
    <ErrorPage
      logo={bussinessData && bussinessData.logo}
      logoAlt={bussinessData && `Logo ${bussinessData.name}`}
      heading={`!Gracias! Registro completado...`}
      description="Hemos enviado la información, revisa tu correo electrónico para ingresar a nuestra plataforma."
      imageAlt="Su registro se ha realizado correctamente."
      image={Completed}
    />
  );
}

export { ConfirmationRegisterComplete };
