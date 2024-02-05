import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "@components/layout/ErrorPage";
import { PeopleOptions } from "@pages/people/outlets/options";
import { People } from "@pages/people";
import { Palette } from "@pages/people/outlets/palette";
import { Texts } from "@pages/people/outlets/texts";
import { Surfaces } from "@pages/people/outlets/surfaces";
import { Lines } from "@pages/people/outlets/lines";
import { TokenProvider } from "@src/context/TokenContext";

function PeopleRoutes() {
  return (
    <TokenProvider>
      <Routes>
        <Route path="/" element={<People />}>
          <Route path="options" element={<PeopleOptions />} />
          <Route path="palette" element={<Palette />} />
          <Route path="texts" element={<Texts />} />
          <Route path="surfaces" element={<Surfaces />} />
          <Route path="lines" element={<Lines />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </TokenProvider>
  );
}

export { PeopleRoutes };
