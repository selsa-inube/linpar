import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "@components/layout/ErrorPage";
import { PeopleOptions } from "@pages/people/outlets/options";
import { People } from "@pages/people";
import { Palette } from "@pages/people/outlets/palette";
import { Texts } from "@pages/people/outlets/texts";
import { Surfaces } from "@pages/people/outlets/surfaces";
import { Strokes } from "@pages/people/outlets/strokes";
import { useState } from "react";
import { inube, presente } from "@inube/design-system";

interface IHandleSubmitProps {
  domain: string;
  block: string;
  tokenUpdate: typeof inube;
}

interface IPeopleColorProps {
  token: typeof inube;
  handleSubmit: (props: IHandleSubmitProps) => void;
}

function PeopleRoutes() {
  const [token, setToken] = useState({ ...presente });

  const handleSubmit = (props: IHandleSubmitProps) => {
    const { domain, block, tokenUpdate } = props;
    const updatedTokenColor = {
      ...token.color,
      [block]: { ...tokenUpdate },
    };

    const updatedToken = {
      ...token,
      [domain]: { ...updatedTokenColor },
    };
    setToken(updatedToken);
  };

  return (
    <Routes>
      <Route path="/" element={<People />}>
        <Route path="options" element={<PeopleOptions />} />
        <Route
          path="palette"
          element={<Palette token={{ ...token }} handleSubmit={handleSubmit} />}
        />
        <Route
          path="texts"
          element={<Texts token={token} handleSubmit={handleSubmit} />}
        />
        <Route
          path="surfaces"
          element={<Surfaces token={token} handleSubmit={handleSubmit} />}
        />
        <Route
          path="strokes"
          element={<Strokes token={token} handleSubmit={handleSubmit} />}
        />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { PeopleRoutes };

export type { IHandleSubmitProps, IPeopleColorProps };
