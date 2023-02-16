import React from "react";
import { ErrorPage } from "../../../../components/layout/ErrorPage";

export const ErrorNotClient = () => {
  return (
    <ErrorPage
      heading="No hay resultados..."
      description="Su usuario no tiene clientes relacionados, consulte con su administrador."
    />
  );
};
