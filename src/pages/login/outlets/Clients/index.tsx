import React, { useState, useEffect, useCallback } from "react";
import { ClientsUI } from "./interface";
import { IClientState, IClient } from "./types";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE_URL = "http://localhost:3001/v1/login/clients/";

function Clients() {
  const [search, setSearch] = useState("");
  const [clientsData, setClientsData] = useState([]);
  const [client, setClient] = useState<IClientState>({
    ref: null,
    value: true,
  });

  const navigate = useNavigate();
  const { user_id } = useParams();

  const getUserClientsData = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${user_id}`);
      const clients = await response.json();
      setClientsData(clients);
    } catch (error) {
      console.error(error);
    }
  }, [user_id]);

  useEffect(() => {
    getUserClientsData();
  }, [getUserClientsData]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (client.ref) {
      client.ref.checked = false;
    }
    setClient({ ref: null, value: true });
    setSearch(event.target.value);
  };

  const handleClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClient({ ref: event.target, value: false });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (client.value) {
      return;
    }
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
      clients={clientsData}
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
