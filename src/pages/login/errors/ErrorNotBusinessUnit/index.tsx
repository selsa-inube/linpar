import { ErrorPage } from "@components/layout/ErrorPage";
import clientNotFound from "@assets/images/Expired.png";

function ErrorNotBusinessUnit() {
  return (
    <ErrorPage
      image={clientNotFound}
      imageAlt="Unidad de negocio no encontrada"
      heading="No hay resultados..."
      description="Su usuario no tiene unidades de negocio relacionados, consulte con su administrador."
    />
  );
}

export { ErrorNotBusinessUnit };
