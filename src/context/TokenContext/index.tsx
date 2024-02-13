import React, { createContext, useReducer, useEffect } from "react";
import { inube } from "@inube/design-system";
import {
  IHandleSubmitProps,
  ITokenContextProps,
  TokenActions,
  actionTypes,
} from "./types";
import {
  getTokens,
  updateIdTokens,
  tokenCalculator,
} from "@src/mocks/themeService/themeService.mock";

const defaultTokenValue: ITokenContextProps = {
  token: {},
  handleSubmit: () => {},
};

const TokenContext = createContext<ITokenContextProps>(defaultTokenValue);

interface ITokenProviderProps {
  children: React.ReactNode;
}

const tokenReducer = (state: typeof inube, action: TokenActions) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return { ...action.payload };
    default:
      return state;
  }
};

const TokenProvider = ({ children }: ITokenProviderProps) => {
  const [token, dispatch] = useReducer(tokenReducer, {});

  useEffect(() => {
    getTokens("presente").then((tokenData: typeof inube) => {
      dispatch({
        type: actionTypes.SET_TOKEN,
        payload: tokenCalculator({ ...tokenData.tokens }),
      });
    });
  }, []);

  const handleSubmit = (props: IHandleSubmitProps) => {
    const { domain, block, tokenUpdate } = props;
    let newTokens = { ...token };
    Object.assign(newTokens[domain][block], tokenUpdate);

    updateIdTokens("presente", newTokens).then((tokenData: typeof inube) => {
      dispatch({ type: actionTypes.SET_TOKEN, payload: tokenData.tokens });
    });
  };

  return (
    <TokenContext.Provider value={{ token, handleSubmit }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
