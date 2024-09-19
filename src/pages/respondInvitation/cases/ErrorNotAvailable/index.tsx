import { ErrorPage } from "@components/layout/ErrorPage";
import { IBusinessUnit } from "@pages/login/types";

interface ErrorNotAvailableProps {
  bussinessUnitsData?: IBusinessUnit;
}

function ErrorNotAvailable(props: ErrorNotAvailableProps) {
  const { bussinessUnitsData } = props;

  return (
    <ErrorPage
      logo={bussinessUnitsData && bussinessUnitsData.logo}
      logoAlt={bussinessUnitsData && `Logo ${bussinessUnitsData.name}`}
    />
  );
}

export { ErrorNotAvailable };
export type { ErrorNotAvailableProps };
