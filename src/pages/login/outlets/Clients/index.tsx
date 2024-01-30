import React, { useState, useContext } from "react";
import { ClientsUI } from "./interface";
import { IClientState, IClient } from "./types";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@src/context";

function Clients() {
  const [search, setSearch] = useState("");
  const [client, setClient] = useState<IClientState>({
    ref: null,
    value: true,
  });

  const navigate = useNavigate();
  const { clients, handelAssignClient } = useContext(AppContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (client.ref) {
      client.ref.checked = false;
    }
    setClient({ ref: null, value: true });
    setSearch(event.target.value);
  };

  const handleClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClient({ ref: event.target, value: false });
    handelAssignClient(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/login/loading-app");
  };

  function filterClients(clients: IClient[], search: string) {
    return clients.filter((client) => {
      const clientName = client.name.toUpperCase();
      const clientSigla = client.sigla.toUpperCase();
      const searchTerm = search.toUpperCase();
      return (
        clientName.includes(searchTerm) || clientSigla.includes(searchTerm)
      );
    });
  }

  return (
    <ClientsUI
      clients={clients}
      search={search}
      client={client}
      handleSearchChange={handleSearchChange}
      handleClientChange={handleClientChange}
      filterClients={filterClients}
      handleSubmit={handleSubmit}
    />
  );
}

export { Clients };
