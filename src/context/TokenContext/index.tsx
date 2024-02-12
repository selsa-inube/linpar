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
    case actionTypes.UPDATE_TOKEN:
      const { domain, block, tokenUpdate } = action.payload;
      return {
        ...state,
        [domain]: {
          ...state[domain],
          [block]: { ...tokenUpdate },
        },
      };
    default:
      return state;
  }
};

const TokenProvider = ({ children }: ITokenProviderProps) => {
  const [token, dispatch] = useReducer(tokenReducer, {});

  useEffect(() => {
    getTokens("presente").then((tokenData: typeof inube) => {
      console.log(tokenData.tokens);
      dispatch({ type: actionTypes.SET_TOKEN, payload: tokenData.tokens });
    });
  }, []);

  const handleSubmit = (props: IHandleSubmitProps) => {
    const { domain, block, tokenUpdate } = props;
    const newTokens = {
      ...token,
      [domain]: {
        ...token[domain],
        [block]: { ...tokenUpdate },
      },
    };
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
