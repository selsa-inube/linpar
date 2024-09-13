import { ErrorPage } from "@components/layout/ErrorPage";
import { IBussinessUnit } from "@src/context/AppContext/types";

interface ErrorNotAvailableProps {
  bussinessUnitsData?: IBussinessUnit;
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
