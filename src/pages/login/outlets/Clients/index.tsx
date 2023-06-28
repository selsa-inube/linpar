import React, { useState, useRef } from "react";
import { clientsDataMock } from "@mocks/login/clients.mock";
import { ClientsUI } from "./interface";

function Clients(): JSX.Element {
  const [search, setSearch] = useState("");
  const [client, setClient] = useState<{
    ref: React.RefObject<HTMLInputElement>;
    value: string | undefined;
  }>({
    ref: useRef<HTMLInputElement>(null),
    value: undefined,
  });

  function clientReset() {
    return {
      ref: client.ref,
      value: undefined,
    };
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (client.ref.current) {
      client.ref.current.checked = false;
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
      ref: client.ref,
      value: event.target.value,
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
