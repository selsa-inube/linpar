import { ErrorPage } from "@components/layout/ErrorPage";
import { IBusinessUnit } from "@pages/login/types";

interface ErrorNotAvailableProps {
  bussinessData?: IBusinessUnit;
}

function ErrorNotAvailable(props: ErrorNotAvailableProps) {
  const { bussinessData } = props;

  return (
    <ErrorPage
      logo={bussinessData && bussinessData.logo}
      logoAlt={bussinessData && `Logo ${bussinessData.name}`}
    />
  );
}

export { ErrorNotAvailable };
export type { ErrorNotAvailableProps };
