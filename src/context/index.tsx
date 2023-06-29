import { createContext } from "react";
import linparLogo from "../assets/images/linpar.png";

export interface IAppContext {
  user: {
    username: string;
    id: string;
    company: string;
    operator: {
      name: string;
      logo: string;
    };
  };
}

const store: IAppContext = {
  user: {
    username: "Leonardo Garzón",
    id: "abc123",
    company: "Fondoccidente",
    operator: {
      name: "Linpar",
      logo: linparLogo,
    },
  },
};

export const AppContext = createContext<IAppContext>(store);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export default function AppContextProvider(props: AppContextProviderProps) {
  const { children } = props;
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}
