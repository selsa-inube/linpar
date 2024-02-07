import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "@components/layout/ErrorPage";
import { PeopleOptions } from "@pages/people/outlets/options";
import { People } from "@pages/people";
import { Palette } from "@pages/people/outlets/palette";
import { Texts } from "@pages/people/outlets/texts";
import { Surfaces } from "@pages/people/outlets/surfaces";
import { Strokes } from "@pages/people/outlets/strokes";
import { TokenProvider } from "@src/context/TokenContext";
import { Fonts } from "@pages/people/outlets/fonts";

function PeopleRoutes() {
  return (
    <TokenProvider>
      <Routes>
        <Route path="/" element={<People />}>
          <Route path="options" element={<PeopleOptions />} />
          <Route path="color" element={<PeopleOptions />} />
          <Route path="color/palette" element={<Palette />} />
          <Route path="color/texts" element={<Texts />} />
          <Route path="color/surfaces" element={<Surfaces />} />
          <Route path="color/strokes" element={<Strokes />} />
          <Route path="typography" element={<PeopleOptions />} />
          <Route path="typography/fonts" element={<Fonts />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </TokenProvider>
  );
}

export { PeopleRoutes };
