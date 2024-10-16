import { useParams } from "react-router-dom";
import Completed from "@assets/images/Completed.png";
import { ErrorPage } from "@components/layout/ErrorPage";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";

function ConfirmationRegisterComplete() {
  const { bussinessData_id } = useParams();

  const getClientData = () => {
    if (!bussinessData_id) return;
    return businessUnitDataMock.find(
      (businessMock) => businessMock.businessUnitPublicCode === bussinessData_id
    );
  };

  const bussinessData = getClientData();
  return (
    <ErrorPage
      logo={bussinessData && bussinessData.urlLogo}
      logoAlt={bussinessData && `Logo ${bussinessData.abbreviatedName}`}
      heading={`!Gracias! Registro completado...`}
      description="Hemos enviado la información, revisa tu correo electrónico para ingresar a nuestra plataforma."
      imageAlt="Su registro se ha realizado correctamente."
      image={Completed}
    />
  );
}

export { ConfirmationRegisterComplete };
