import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "@components/layout/ErrorPage";
import { PeopleOptions } from "@src/pages/people/outlets/options";
import { People } from "@src/pages/people";
import { Palette } from "@src/pages/people/outlets/palette";
import { Texts } from "@src/pages/people/outlets/texts";
import { Surfaces } from "@src/pages/people/outlets/surfaces";
import { Lines } from "@src/pages/people/outlets/lines";
import { useState } from "react";
import { inube, presente } from "@inube/design-system";

function PeopleRoutes() {
  const [token, setToken] = useState({ ...presente });

  const handleSubmit = (
    domain: string,
    block: string,
    tokenUpdate: typeof inube
  ) => {
    const updatedTokenColor = {
      ...token.color,
      [block]: { ...tokenUpdate },
    };

    const updatedToken = {
      ...token,
      [domain]: { updatedTokenColor },
    };
    setToken(updatedToken);
  };

  return (
    <Routes>
      <Route path="/" element={<People />}>
        <Route path="options" element={<PeopleOptions />} />
        <Route
          path="palette"
          element={<Palette token={token} handleSubmit={handleSubmit} />}
        />
        <Route path="texts" element={<Texts />} />
        <Route path="surfaces" element={<Surfaces />} />
        <Route path="lines" element={<Lines />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { PeopleRoutes };
