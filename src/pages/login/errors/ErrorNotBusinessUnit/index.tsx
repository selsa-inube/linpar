import { ErrorPage } from "@components/layout/ErrorPage";
import clientNotFound from "@assets/images/Expired.png";

function ErrorNotBusinessUnit() {
  return (
    <ErrorPage
      image={clientNotFound}
      imageAlt="Unidad de negocio no encontrada"
      heading="No hay resultados..."
      description="El usuario NO tiene la configuracion requerida para acceder a este portal"
    />
  );
}

export { ErrorNotBusinessUnit };
