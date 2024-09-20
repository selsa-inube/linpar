import { ErrorPage } from "@components/layout/ErrorPage";
import { IBusinessUnit } from "@pages/login/types";

interface ErrorNotAvailableProps {
  clientData?: IBusinessUnit;
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
