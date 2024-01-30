import React, { createContext, useState, useCallback } from "react";
import { inube, presente } from "@inube/design-system";

export interface IHandleSubmitProps {
  domain: string;
  block: string;
  tokenUpdate: typeof inube;
}

interface ITokenState {
  token: typeof inube;
  handleToken: (
    domain: string,
    block: string,
    tokenUpdate: typeof inube
  ) => void;
}

const defaultTokenValue: ITokenState = {
  token: presente,
  handleToken: () => {},
};

const TokenContext = createContext<ITokenState>(defaultTokenValue);

interface ITokenProviderProps {
  children: React.ReactNode;
}

const TokenProvider = (props: ITokenProviderProps) => {
  const { children } = props;
  const [token, setToken] = useState(presente);

  const handleToken = useCallback(
    (domain: string, block: string, tokenUpdate: typeof inube) => {
      const updatedTokenColor = {
        ...token.color,
        [block]: { ...tokenUpdate },
      };

      const updatedToken = {
        ...token,
        [domain]: { ...updatedTokenColor },
      };

      setToken(updatedToken);
    },
    [token]
  );

  return (
    <TokenContext.Provider value={{ token, handleToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
