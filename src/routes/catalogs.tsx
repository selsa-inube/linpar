import { Route, Routes } from "react-router-dom";
import { Catalogs } from "@pages/catalogs";

import { ErrorPage } from "@components/layout/ErrorPage";
import { LinixUseCase } from "@pages/catalogs/outlets/linixUseCase";
import { Roles } from "@pages/catalogs/outlets/roles";
import { AddingLinixUseCase } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case";
import { AddRol } from "@pages/catalogs/outlets/roles/add-role";
import { EditRole } from "@pages/catalogs/outlets/roles/edit-role";
import { EditCaseLinix } from "@pages/catalogs/outlets/linixUseCase/EditModal";
import { CatalogsOptions } from "@pages/catalogs/outlets/options";

function CatalogsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Catalogs />}>
        <Route path="options" element={<CatalogsOptions />} />
        <Route path="linixUseCase" element={<LinixUseCase />} />
        <Route path="roles" element={<Roles />} />

        <Route
          path="linixUseCase/adding-linix-use-case"
          element={<AddingLinixUseCase />}
        />
        <Route path="roles/add-role" element={<AddRol />} />
        <Route path="roles/edit/:k_Rol" element={<EditRole />} />

        <Route
          path="linixUseCase/edit/:k_Usecase"
          element={<EditCaseLinix />}
        />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { CatalogsRoutes };
