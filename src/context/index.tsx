import { createContext, useReducer } from "react";
import linparLogo from "../assets/images/linpar.png";
import { IAppContext } from "./types";
import { useAuth0 } from "@auth0/auth0-react";
import { clientsDataMock } from "@mocks/login/clients.mock";

export const AppContext = createContext<IAppContext>(null);

interface AppContextProviderProps {
  children: React.ReactNode;
}

interface IActionClient {
  type: string;
  clientName: string;
}
function clientReducer(client: string, action: IActionClient) {
  switch (action.type) {
    case "setClient":
      return action.clientName;
    default:
      return client;
  }
}

export default function AppContextProvider(props: AppContextProviderProps) {
  const { children } = props;
  const { user } = useAuth0();
  const [client, clientDispatch] = useReducer(clientReducer, "");

  function handelAssignClient(client: string) {
    clientDispatch({ type: "setClient", clientName: client });
  }

  const clients = clientsDataMock;
  const company =
    client.length === 0
      ? ""
      : clients.filter((client0) => client0.name === client)[0].sigla;

  const userContext: IAppContext = {
    user: {
      username: `${user?.name}`,
      id: "abc123",
      company: company,
      operator: {
        name: "Linpar",
        logo: linparLogo,
      },
    },
    handelAssignClient,
    clients: clients,
  };
  return (
    <AppContext.Provider value={userContext}>{children}</AppContext.Provider>
  );
}
