import React, { useState, useEffect } from "react";
import { ClientsUI } from "./interface";
import { IClientState, IClient } from "./types";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_CLIENTS_URI;

async function getUserClientsData(user_id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}${user_id}`);
    const clients = await response.json();
    return clients;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function Clients() {
  const [search, setSearch] = useState("");
  const [clientsData, setClientsData] = useState([]);
  const [client, setClient] = useState<IClientState>({
    ref: null,
    value: true,
  });

  const navigate = useNavigate();
  const { user_id } = useParams();

  useEffect(() => {
    async function getData() {
      if (!user_id) {
        return;
      }
      const clients = await getUserClientsData(user_id);
      setClientsData(clients);
    }
    getData();
  }, [user_id]);

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
