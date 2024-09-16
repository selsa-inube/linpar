import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "@context/AppContext";
import { IBussinessUnit } from "@context/AppContext/types";
import { IBussinessUnits } from "@routes/login";
import { BussinessUnitsUI } from "./interface";
import { IBussinessUnitState } from "./types";

function BussinessUnits({ bussinessUnits }: IBussinessUnits) {
  const [search, setSearch] = useState("");
  const [bussinessUnitLocal, setBussinessUnitLocal] =
    useState<IBussinessUnitState>({
      ref: null,
      value: true,
    });

  const navigate = useNavigate();
  const { handleBussinessUnitChange } = useContext(AppContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (bussinessUnitLocal.ref) {
      bussinessUnitLocal.ref.checked = false;
    }
    setBussinessUnitLocal({ ref: null, value: true });
    setSearch(event.target.value);
  };

  const handleCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBussinessUnitLocal({ ref: event.target, value: false });
    handleBussinessUnitChange(
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
    return bussinessUnits.filter((bussinessUnit) => {
      const bussinessUnitName = bussinessUnit.name.toUpperCase();
      const bussinessUnitSigla = bussinessUnit.sigla.toUpperCase();
      const searchTerm = search.toUpperCase();
      return (
        bussinessUnitName.includes(searchTerm) ||
        bussinessUnitSigla.includes(searchTerm)
      );
    });
  }

  return (
    <BussinessUnitsUI
      bussinessUnits={bussinessUnits}
      search={search}
      bussinessUnit={bussinessUnitLocal}
      handleSearchChange={handleSearchChange}
      handleBussinessUnitChange={handleCChange}
      filterBussinessUnits={filterBussinessUnits}
      handleSubmit={handleSubmit}
    />
  );
}

export { BussinessUnits };
