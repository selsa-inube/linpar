import React, { createContext, useState, useCallback, useEffect } from "react";
import { inube } from "@inube/design-system";
import { IHandleSubmitProps, ITokenContextProps } from "./types";
import { fetchTokenData } from "@src/mocks/themeService/themeService.mock";

const defaultTokenValue: ITokenContextProps = {
  token: {},
  handleSubmit: () => {},
};

const TokenContext = createContext<ITokenContextProps>(defaultTokenValue);

interface ITokenProviderProps {
  children: React.ReactNode;
}

const TokenProvider = (props: ITokenProviderProps) => {
  const { children } = props;
  const [token, setToken] = useState<typeof inube>({});

  useEffect(() => {
    fetchTokenData().then((token: typeof inube) => {
      setToken({ ...token });
    });
  }, []);

  const handleSubmit = useCallback(
    (props: IHandleSubmitProps) => {
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
    },
    [token]
  );

  return (
    <TokenContext.Provider value={{ token, handleSubmit }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
