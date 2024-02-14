import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "@components/layout/ErrorPage";
import { PeopleOptions } from "@pages/people/outlets/options";
import { People } from "@pages/people";
import { TokenProvider } from "@context/TokenContext";
import { Fonts } from "@pages/people/outlets/typography/fonts";
import { Palette } from "@pages/people/outlets/color/palette";
import { Texts } from "@pages/people/outlets/color/texts";
import { Surfaces } from "@pages/people/outlets/color/surfaces";
import { Strokes } from "@pages/people/outlets/color/strokes";

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
