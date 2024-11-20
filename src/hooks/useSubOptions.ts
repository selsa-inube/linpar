import { useContext } from "react";
import { LinparContext } from "@context/AppContext";
import { useOptionsByBusinessunits } from "@src/hooks/useObject";
import { decrypt } from "@src/utils/encrypt";

export function useSubOptions(catalogName: string) {
  const { businessUnitSigla } = useContext(LinparContext);
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";

  const { subOptions } = useOptionsByBusinessunits(
    staffPortalId,
    businessUnitSigla,
    catalogName
  );

  return { subOptions };
}
