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

  const handleTokenChange = (domain, block, tokenUpdate) => {
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
          element={<Palette token={token} setToken={handleTokenChange} />}
        />
        <Route
          path="texts"
          element={<Texts token={token} setToken={handleTokenChange} />}
        />
        <Route
          path="surfaces"
          element={<Surfaces token={token} setToken={handleTokenChange} />}
        />
        <Route
          path="lines"
          element={<Lines token={token} setToken={handleTokenChange} />}
        />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { PeopleRoutes };
