import { ErrorPage } from "@components/layout/ErrorPage";
import { IBusinessUnitsPortalStaff } from "@services/businessUnitsPortalStaff/types";

interface ErrorNotAvailableProps {
  bussinessData?: IBusinessUnitsPortalStaff;
}

function ErrorNotAvailable(props: ErrorNotAvailableProps) {
  const { bussinessData } = props;

  return (
    <ErrorPage
      logo={bussinessData && bussinessData.urlLogo}
      logoAlt={bussinessData && `Logo ${bussinessData.abbreviatedName}`}
    />
  );
}

export { ErrorNotAvailable };
export type { ErrorNotAvailableProps };
