import { ErrorPage } from "@components/layout/ErrorPage";
import clientNotFound from "@assets/images/Expired.png";

function ErrorNotBussinessUnit() {
  return (
    <ErrorPage
      image={clientNotFound}
      imageAlt="Unidad de negocio no encontrado"
      heading="No hay resultados..."
      description="Su usuario no tiene Unidad de negocio relacionados, consulte con su administrador."
    />
  );
}

export { ErrorNotBussinessUnit };
