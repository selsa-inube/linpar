import { createContext } from "react";
import linparLogo from "../assets/images/linpar.png";

const store = {
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

export const AppContext = createContext(null);

export default function AppContextProvider(props) {
  const { children } = props;
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}
