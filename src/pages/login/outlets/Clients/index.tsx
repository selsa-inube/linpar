import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ClientsUI } from "./interface";
import { IClientState } from "./types";

function Clients() {
  const [search, setSearch] = useState("");
  const [client, setClient] = useState<IClientState>({
    ref: null,
    value: true,
  });
  const navigate = useNavigate();
  const { user_id } = useParams();
  const [clientsData, setClientsData] = useState([]);
  const [userEntriesData, setUserEntriesData] = useState<{ clients: any[] }>({
    clients: [],
  });

  useEffect(() => {
    fetchClientsData();
    fetchUserEntriesData();
  }, []);

  async function fetchClientsData() {
    try {
      const response = await fetch("http://localhost:3001/v1/login/clients");
      const data = await response.json();
      setClientsData(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchUserEntriesData() {
    try {
      const response = await fetch(
        `http://localhost:3001/v1/privileges/users/${user_id}`
      );
      const data = await response.json();
      setUserEntriesData(data);
    } catch (error) {
      console.error(error);
    }
  }

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
    return clientsData.filter((client) => userClientIds.includes(client.id));
  }

  function handleClientChange(event: React.ChangeEvent<HTMLInputElement>) {
    setClient({
      ref: event.target,
      value: false,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/login/loading-app");
  }

  const userClientIds = userEntriesData.clients || [];

  return (
    <ClientsUI
      clients={filterClients()}
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
