import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LinparContext } from "@context/AppContext";
import { IBusinessUnitsPortalStaff } from "@services/businessUnitsPortalStaff/types";
import { BusinessUnitsUI } from "./interface";
import { IBusinessUnitstate } from "./types";
import { ThemeName, useTheme } from "@src/context/ThemeContext";

interface BusinessUnitsProps {
  businessUnits: IBusinessUnitsPortalStaff[];
}

function BusinessUnits(props: BusinessUnitsProps) {
  const { businessUnits } = props;
  const [search, setSearch] = useState("");
  const [businessUnitLocal, setBusinessUnitLocal] =
    useState<IBusinessUnitstate>({
      ref: null,
      value: true,
    });

  const [selectedBusinessUnit, setSelectedBusinessUnit] =
    useState<IBusinessUnitsPortalStaff | null>(null);

  const navigate = useNavigate();
  const { setBusinessUnitSigla } = useContext(LinparContext);
  const { setThemeName } = useTheme();
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (businessUnitLocal.ref) {
      businessUnitLocal.ref.checked = false;
    }
    setBusinessUnitLocal({ ref: null, value: true });
    setSearch(event.target.value);
  };

  const handleCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessUnitLocal({ ref: event.target, value: false });

    const selectOption = businessUnits.find(
      (businessUnit0) => businessUnit0.abbreviatedName === event.target.value
    );
    setSelectedBusinessUnit(selectOption || null);
    if (selectOption) {
      if (selectOption.abbreviatedName === "Sistemas Enlínea S.A.") {
        setThemeName("sistemasenlinea");
      } else {
        setThemeName(selectOption.abbreviatedName as ThemeName);
      }
    }
  };

  const handleSubmit = () => {
    if (selectedBusinessUnit) {
      const selectJSON = JSON.stringify(selectedBusinessUnit);
      setBusinessUnitSigla(selectJSON);
    }
    navigate("/login/loading-app");
  };

  function filterBusinessUnits(
    businessUnits: IBusinessUnitsPortalStaff[],
    search: string
  ) {
    const searchTerm = search?.toUpperCase();

    return businessUnits.filter((unit) => {
      const businessUnitName = unit?.abbreviatedName?.toUpperCase() || "";
      const businessUnitSigla =
        unit?.businessUnitPublicCode?.toUpperCase() || "";

      return (
        businessUnitName.includes(searchTerm) ||
        businessUnitSigla.includes(searchTerm)
      );
    });
  }

  return (
    <BusinessUnitsUI
      businessUnits={Object.values(businessUnits)}
      search={search}
      businessUnit={businessUnitLocal}
      handleSearchChange={handleSearchChange}
      handleBussinessUnitChange={handleCChange}
      filterBusinessUnits={filterBusinessUnits}
      handleSubmit={handleSubmit}
    />
  );
}

export { BusinessUnits };
