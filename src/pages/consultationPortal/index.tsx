import { useEffect, useState } from "react";
import { getStaffPortalByBusinessManager } from "@services/staffPortal";
import { IStaffPortalByBusinessManager } from "@services/staffPortal/types";
import { ErrorPage } from "@components/layout/ErrorPage";
import { Login } from "../login";

export function ConsultationPortal() {
  const [portalData, setPortalData] = useState<IStaffPortalByBusinessManager[]>(
    []
  );
  const validateConsultation = async () => {
    try {
      const newData = await getStaffPortalByBusinessManager();
      setPortalData(newData);
    } catch (error) {
      console.info(error);
    }
  };

  useEffect(() => {
    validateConsultation();
  }, []);

  const [validateCode, setValidateCode] = useState(false);

  useEffect(() => {
    if (portalData.length > 0) {
      const portalDataFiltered = portalData.filter(
        (data) => data.publicCode === "2587"
      );
      if (portalDataFiltered) {
        console.info(portalDataFiltered);
        setValidateCode(true);
      } else {
        console.info("No hay datos");
        setValidateCode(false);
      }
    } else {
      setValidateCode(false);
    }
  }, [portalData]);
  return <>{validateCode ? <Login /> : <ErrorPage />}</>;
}
