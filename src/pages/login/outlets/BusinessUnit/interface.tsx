import React from "react";
import { MdSearch } from "react-icons/md";
import { Stack } from "@inubekit/stack";
import { Searchfield } from "@inubekit/input";
import { RadioBusinessUnit } from "@components/cards/RadioBusinessUnit";
import { IBusinessUnitsPortalStaff } from "@services/businessUnitsPortalStaff/types";
import { IBusinessUnitstate } from "./types";
import { Text } from "@inubekit/text";
import { Button } from "@inubekit/button";
import {
  StyledBusinessUnits,
  StyledBusinessUnitsList,
  StyledNoResults,
  StyledBusinessUnitsItem,
} from "./styles";

interface BusinessUnitsUIProps {
  businessUnits: IBusinessUnitsPortalStaff[];
  search: string;
  businessUnit: IBusinessUnitstate;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBussinessUnitChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  filterBusinessUnits: (
    businessUnits: IBusinessUnitsPortalStaff[],
    search: string
  ) => IBusinessUnitsPortalStaff[];
  handleSubmit: () => void;
}

function NoResultsMessage({ search }: { search: string }) {
  return (
    <StyledNoResults>
      <Text size="medium">No se encontraron resultados para "{search}".</Text>
      <Text size="medium">
        Por favor, intenta modificando los parámetros de búsqueda.
      </Text>
    </StyledNoResults>
  );
}

function BusinessUnitsUI({
  businessUnits,
  search,
  businessUnit,
  handleSearchChange,
  filterBusinessUnits,
  handleBussinessUnitChange,
  handleSubmit,
}: BusinessUnitsUIProps) {
  return (
    <StyledBusinessUnits>
      <Text type="title" as="h2" textAlign="center">
        Unidad de Negocios
      </Text>
      <Text size="medium" textAlign="center">
        Seleccione la Unidad de Negocio
      </Text>
      <form>
        <Stack direction="column" alignItems="center">
          {businessUnits.length > 10 && (
            <Searchfield
              placeholder="Buscar..."
              type="search"
              name="searchBusinessUnits"
              id="searchBusinessUnits"
              value={search}
              fullwidth={true}
              onChange={handleSearchChange}
              iconBefore={<MdSearch size={22} />}
            />
          )}
          {filterBusinessUnits(businessUnits, search).length === 0 && (
            <NoResultsMessage search={search} />
          )}
          <StyledBusinessUnitsList $scroll={businessUnits.length > 5}>
            <Stack
              direction="column"
              padding="s0 s100"
              alignItems="center"
              gap="8px"
            >
              {filterBusinessUnits(businessUnits, search).map(
                (businessUnit) => (
                  <StyledBusinessUnitsItem
                    key={businessUnit.businessUnitPublicCode}
                  >
                    <RadioBusinessUnit
                      name="businessUnit"
                      label={businessUnit.abbreviatedName}
                      id={businessUnit.businessUnitPublicCode}
                      value={businessUnit.abbreviatedName}
                      logo={businessUnit.urlLogo}
                      handleChange={handleBussinessUnitChange}
                    />
                  </StyledBusinessUnitsItem>
                )
              )}
            </Stack>
          </StyledBusinessUnitsList>
          <Button
            type="button"
            disabled={businessUnit.value}
            onClick={handleSubmit}
          >
            Continuar
          </Button>
        </Stack>
      </form>
    </StyledBusinessUnits>
  );
}

export { BusinessUnitsUI };
