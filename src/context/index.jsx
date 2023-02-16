import { createContext } from "react";

const store = {
  user: {
    username: "Leonardo Garzón",
    id: "abc123",
    company: "Fondoccidente",
  },
};

export const AppContext = createContext(null);

export default function AppContextProvider(props) {
  const { children } = props;
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}
