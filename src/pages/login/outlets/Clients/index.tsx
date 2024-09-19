import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LinparContext } from "@context/AppContext";
import { IClient } from "@context/AppContext/types";
import { IClients } from "@routes/login";
import { ClientsUI } from "./interface";
import { IClientState } from "./types";

function Clients({ clients }: IClients) {
  const [search, setSearch] = useState("");
  const [clientLocal, setClientLocal] = useState<IClientState>({
    ref: null,
    value: true,
  });

  const navigate = useNavigate();
  const { setLinparData, linparData, setBusinessUnitSigla } =
    useContext(LinparContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (clientLocal.ref) {
      clientLocal.ref.checked = false;
    }
    setClientLocal({ ref: null, value: true });
    setSearch(event.target.value);
  };

  const handleCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientLocal({ ref: event.target, value: false });
    const selectOption = clients.filter(
      (client0) => client0.name === event.target.value
    );
    const businessUnit = linparData.businessUnit || {};

    setLinparData((prev) => ({
      ...prev,
      businessUnit: {
        ...businessUnit,
        abbreviatedName: selectOption[0].sigla,
        urlLogo: selectOption[0].logo,
        businessUnit: selectOption[0].sigla,
        publicCode: selectOption[0].id,
      },
    }));
    setBusinessUnitSigla(selectOption[0].sigla);
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
