import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "@context/AppContext";
import { IBussinessUnit } from "@context/AppContext/types";
import { IBussinessUnits } from "@src/routes/login";
import { BussinessUnitsUI } from "./interface";
import { IClientState } from "./types";

function BussinessUnits({ bussinessUnits }: IBussinessUnits) {
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
      bussinessUnits.filter(
        (bussinessUnit0) => bussinessUnit0.name === event.target.value
      )[0]
    );
  };

  const handleSubmit = () => {
    navigate("/login/loading-app");
  };

  function filterBussinessUnits(
    bussinessUnits: IBussinessUnit[],
    search: string
  ) {
    return bussinessUnits.filter((client) => {
      const clientName = client.name.toUpperCase();
      const clientSigla = client.sigla.toUpperCase();
      const searchTerm = search.toUpperCase();
      return (
        clientName.includes(searchTerm) || clientSigla.includes(searchTerm)
      );
    });
  }

  return (
    <BussinessUnitsUI
      clients={bussinessUnits}
      search={search}
      client={clientLocal}
      handleSearchChange={handleSearchChange}
      handleClientChange={handleCChange}
      filterBussinessUnits={filterBussinessUnits}
      handleSubmit={handleSubmit}
    />
  );
}

export { BussinessUnits };
