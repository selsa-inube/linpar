import Expired from "@assets/images/Expired.png";
import { ErrorPage } from "@components/layout/ErrorPage";
import { IBussinessUnit } from "@context/AppContext/types";

interface ErrorInvitationExpiredProps {
  bussinessUnitsData?: IBussinessUnit;
}

function ErrorInvitationExpired(props: ErrorInvitationExpiredProps) {
  const { bussinessUnitsData } = props;

  return (
    <ErrorPage
      logo={bussinessUnitsData && bussinessUnitsData.logo}
      logoAlt={bussinessUnitsData && `Logo ${bussinessUnitsData.name}`}
      heading="!Lo sentimos! no hay resultados..."
      description="Su usuario no tiene bussinessUnitses relacionados, por favor consulte con su administrador."
      imageAlt="No hay resultados."
      image={Expired}
    />
  );
}

export { ErrorInvitationExpired };
export type { ErrorInvitationExpiredProps };
