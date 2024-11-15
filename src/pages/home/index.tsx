import { HomeUI } from "./interface";
import { useContext } from "react";
import { LinparContext } from "@src/context/AppContext";
import { decrypt } from "@src/utils/encrypt";
import { useOptionsByBusinessunits } from "@src/hooks/useObject";

function Home() {
  const { businessUnitSigla } = useContext(LinparContext);
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";

  const { optionsCards, loading } = useOptionsByBusinessunits(
    staffPortalId,
    businessUnitSigla
  );
  return <HomeUI data={optionsCards} loading={loading} />;
}

export { Home };
