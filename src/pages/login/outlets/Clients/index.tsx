import React, { useState } from "react";
import { clientsDataMock } from "@mocks/login/clients.mock";
import { ClientsUI } from "./interface";
import { IClientState } from "./types";

function Clients() {
  const [search, setSearch] = useState("");
  const [client, setClient] = useState<IClientState>({
    ref: null,
    value: true,
  });

  function clientReset() {
    return {
      ref: null,
      value: true,
    };
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (client.ref) {
      client.ref.checked = false;
    }
    setClient(clientReset());
    setSearch(event.target.value);
  }

  function filterClients() {
    return clientsDataMock.filter((client) => {
      return (
        client.name.toUpperCase().includes(search.toUpperCase()) ||
        client.sigla.toUpperCase().includes(search.toUpperCase())
      );
    });
  }

  function handleClientChange(event: React.ChangeEvent<HTMLInputElement>) {
    setClient({
      ref: event.target,
      value: false,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <ClientsUI
      clients={clientsDataMock}
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
