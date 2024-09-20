import React, {
  createContext,
  useReducer,
  useEffect,
  useState,
  useContext,
} from "react";
import { inube } from "@inube/design-system";

import {
  getTokens,
  updateIdTokens,
} from "@mocks/themeService/themeService.mock";
import { LinparContext } from "@context/AppContext";
import {
  IHandleSubmitProps,
  ITokenContextProps,
  TokenActions,
  actionTypes,
} from "./types";

const defaultTokenValue: ITokenContextProps = {
  tokenWithRef: {},
  handleSubmit: () => {},
  loading: true,
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
  const [tokenWithRef, dispatch] = useReducer(tokenReducer, {});
  const [loading, setLoading] = useState(true);

  const { businessUnitSigla } = useContext(LinparContext);
  const businessName = businessUnitSigla.toLowerCase();

  useEffect(() => {
    getTokens(businessName)
      .then((tokenData: typeof inube) => {
        dispatch({
          type: actionTypes.SET_TOKEN,
          payload: { ...tokenData.tokens },
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch token data:", error);
        setLoading(false);
      });
  }, [businessName]);

  const handleSubmit = (props: IHandleSubmitProps) => {
    const { domain, block, tokenUpdate } = props;
    let newTokens = { ...tokenWithRef };
    Object.assign(newTokens[domain][block], tokenUpdate);
    updateIdTokens(businessName, newTokens).then((tokenData: typeof inube) => {
      dispatch({ type: actionTypes.SET_TOKEN, payload: tokenData.tokens });
    });
  };

  return (
    <TokenContext.Provider value={{ tokenWithRef, handleSubmit, loading }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
