import { ErrorPage } from "@components/layout/ErrorPage";

function ErrorNotClient(): JSX.Element {
  return (
    <ErrorPage
      heading="No hay resultados..."
      description="Su usuario no tiene clientes relacionados, consulte con su administrador."
    />
  );
}

export { ErrorNotClient };
