import Expired from "@assets/images/Expired.png";
import { ErrorPage } from "@components/layout/ErrorPage";
import { IBusinessUnitsPortalStaff } from "@services/businessUnitsPortalStaff/types";

interface ErrorInvitationExpiredProps {
  bussinessData?: IBusinessUnitsPortalStaff;
}

function ErrorInvitationExpired(props: ErrorInvitationExpiredProps) {
  const { bussinessData } = props;

  return (
    <ErrorPage
      logo={bussinessData && bussinessData.urlLogo}
      logoAlt={bussinessData && `Logo ${bussinessData.abbreviatedName}`}
      heading="!Lo sentimos! no hay resultados..."
      description="Su usuario no tiene clientes relacionados, por favor consulte con su administrador."
      imageAlt="No hay resultados."
      image={Expired}
    />
  );
}

export { ErrorInvitationExpired };
export type { ErrorInvitationExpiredProps };
