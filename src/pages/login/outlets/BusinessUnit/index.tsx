import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LinparContext } from "@context/AppContext";

import { IBusinessUnits } from "@routes/login";
import { BusinessUnitsUI } from "./interface";
import { IBusinessUnitstate } from "./types";
import { IBusinessUnit } from "../../types";

function BusinessUnits({ businessUnits }: IBusinessUnits) {
  const [search, setSearch] = useState("");
  const [businessUnitLocal, setClientLocal] = useState<IBusinessUnitstate>({
    ref: null,
    value: true,
  });

  const navigate = useNavigate();
  const { setLinparData, linparData, setBusinessUnitSigla } =
    useContext(LinparContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (businessUnitLocal.ref) {
      businessUnitLocal.ref.checked = false;
    }
    setClientLocal({ ref: null, value: true });
    setSearch(event.target.value);
  };

  const handleCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientLocal({ ref: event.target, value: false });
    const selectOption = businessUnits.filter(
      (businessUnit0) => businessUnit0.name === event.target.value
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

  function filterBusinessUnits(businessUnit: IBusinessUnit[], search: string) {
    return businessUnit.filter((businessUnit) => {
      const businessUnitName = businessUnit.name.toUpperCase();
      const businessUnitSigla = businessUnit.sigla.toUpperCase();
      const searchTerm = search.toUpperCase();
      return (
        businessUnitName.includes(searchTerm) ||
        businessUnitSigla.includes(searchTerm)
      );
    });
  }

  return (
    <BusinessUnitsUI
      businessUnits={businessUnits}
      search={search}
      businessUnit={businessUnitLocal}
      handleSearchChange={handleSearchChange}
      handleClientChange={handleCChange}
      filterBusinessUnits={filterBusinessUnits}
      handleSubmit={handleSubmit}
    />
  );
}

export { BusinessUnits };
