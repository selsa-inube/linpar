import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LinparContext } from "@context/AppContext";
import { IBussinessUnits } from "@routes/login";
import { IBusinessUnit } from "../../types";
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
  const { setLinparData, linparData, setBusinessUnitSigla } =
    useContext(LinparContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (bussinessUnitLocal.ref) {
      bussinessUnitLocal.ref.checked = false;
    }
    setBussinessUnitLocal({ ref: null, value: true });
    setSearch(event.target.value);
  };

  const handleCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBussinessUnitLocal({ ref: event.target, value: false });
    const selectOption = bussinessUnits.filter(
      (bussinessUnit0) => bussinessUnit0.name === event.target.value
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

  function filterBussinessUnits(
    bussinessUnits: IBusinessUnit[],
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
