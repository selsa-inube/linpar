import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "@components/layout/ErrorPage";
import { PeopleOptions } from "@src/pages/people/outlets/options";
import { People } from "@src/pages/people";
import { Palette } from "@src/pages/people/outlets/palette";
import { Texts } from "@src/pages/people/outlets/texts";
import { Surfaces } from "@src/pages/people/outlets/surfaces";
import { Lines } from "@src/pages/people/outlets/lines";
import { useState } from "react";
import { presente } from "@inube/design-system";
import { getTokenColor } from "@src/components/cards/FieldsetColorCard/styles";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";

function PeopleRoutes() {
  const [token, setToken] = useState({ ...presente });

  const handleTokenChange = (
    domain: string,
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    token.color[domain][appearance][category] = getTokenColor(
      updatedTokenName,
      token
    );

    const updatedTheme = {
      ...token,
      color: {
        ...token.color,
        [domain]: token.color[domain],
      },
    };
    setToken(updatedTheme);
  };

  return (
    <Routes>
      <Route path="/" element={<People />}>
        <Route path="options" element={<PeopleOptions />} />
        <Route path="palette" element={<Palette />} />
        <Route
          path="texts"
          element={
            <Texts tokens={token} handleTokenChange={handleTokenChange} />
          }
        />
        <Route path="surfaces" element={<Surfaces />} />
        <Route path="lines" element={<Lines />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { PeopleRoutes };
