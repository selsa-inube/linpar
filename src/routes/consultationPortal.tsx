import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";

import { IClient } from "@context/AppContext/types";
import { ConsultationPortal } from "@src/pages/consultationPortal";

export interface IClients {
  clients: IClient[];
}
function ConsultationPortalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ConsultationPortal />} />

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { ConsultationPortalRoutes };
