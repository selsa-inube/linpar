import React, { useState, useContext } from "react";
import { ClientsUI } from "./interface";
import { IClientState } from "./types";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@context/AppContext";
import { IClient } from "@context/AppContext/types";
import { IClients } from "@src/routes/login";

function Clients({ clients }: IClients) {
  const [search, setSearch] = useState("");
  const [clientLocal, setClientLocal] = useState<IClientState>({
    ref: null,
    value: true,
  });

  const navigate = useNavigate();
  const { handleClientChange } = useContext(AppContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (clientLocal.ref) {
      clientLocal.ref.checked = false;
    }
    setClientLocal({ ref: null, value: true });
    setSearch(event.target.value);
  };

  const handleCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientLocal({ ref: event.target, value: false });
    handleClientChange(
      clients.filter((client0) => client0.name === event.target.value)[0]
    );
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
      client={clientLocal}
      handleSearchChange={handleSearchChange}
      handleClientChange={handleCChange}
      filterClients={filterClients}
      handleSubmit={handleSubmit}
    />
  );
}

export { Clients };
