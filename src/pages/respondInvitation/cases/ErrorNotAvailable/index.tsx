import { ErrorPage } from "@components/layout/ErrorPage";
import { IClient } from "../../types";

interface ErrorNotAvailableProps {
  clientData?: IClient;
}

function ErrorNotAvailable(props: ErrorNotAvailableProps) {
  const { clientData } = props;

  return (
    <ErrorPage
      logo={clientData && clientData.logo}
      logoAlt={clientData && `Logo ${clientData.name}`}
    />
  );
}

export { ErrorNotAvailable };
export type { ErrorNotAvailableProps };
