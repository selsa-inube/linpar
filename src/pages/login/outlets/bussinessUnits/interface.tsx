import React from "react";
import { MdSearch } from "react-icons/md";
import { Button, Text, Textfield, Stack, inube } from "@inube/design-system";
import { RadioBusinessUnit } from "@components/cards/RadioBusinessUnit ";

import {
  StyledBussinessUnits,
  StyledBussinessUnitsList,
  StyledNoResults,
  StyledBussinessUnitsItem,
} from "./styles";

import { IBussinessUnitState } from "./types";
import { IBusinessUnit } from "../../types";

interface BussinessUnitsUIProps {
  bussinessUnits: IBusinessUnit[];
  search: string;
  bussinessUnit: IBussinessUnitState;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBussinessUnitChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  filterBussinessUnits: (
    bussinessUnits: IBusinessUnit[],
    search: string
  ) => IBusinessUnit[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
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

function BussinessUnitsUI({
  bussinessUnits,
  search,
  bussinessUnit,
  handleSearchChange,
  filterBussinessUnits,
  handleBussinessUnitChange,
  handleSubmit,
}: BussinessUnitsUIProps) {
  const filteredBussinessUnits = filterBussinessUnits(bussinessUnits, search);

  return (
    <StyledBussinessUnits>
      <Text type="title" as="h2" textAlign="center">
        Unidad de Negocios
      </Text>
      <Text size="medium" textAlign="center">
        Seleccione la Unidad de Negocio
      </Text>
      <form>
        <Stack direction="column" alignItems="center">
          {bussinessUnits.length > 10 && (
            <Textfield
              placeholder="Buscar..."
              type="search"
              name="searchBussinessUnits"
              id="searchBussinessUnits"
              value={search}
              fullwidth={true}
              onChange={handleSearchChange}
              iconBefore={<MdSearch size={22} />}
            />
          )}
          {filteredBussinessUnits.length === 0 && (
            <NoResultsMessage search={search} />
          )}
          <StyledBussinessUnitsList $scroll={bussinessUnits.length > 5}>
            <Stack
              direction="column"
              padding="s0 s100"
              alignItems="center"
              gap={inube.spacing.s100}
            >
              {filteredBussinessUnits.map((bussinessUnit) => (
                <StyledBussinessUnitsItem key={bussinessUnit.id}>
                  <RadioBusinessUnit
                    name="bussinessUnit"
                    label={bussinessUnit.name}
                    id={bussinessUnit.id}
                    value={bussinessUnit.name}
                    logo={bussinessUnit.logo}
                    handleChange={handleBussinessUnitChange}
                  />
                </StyledBussinessUnitsItem>
              ))}
            </Stack>
          </StyledBussinessUnitsList>
          <Button
            type="button"
            disabled={bussinessUnit.value}
            onClick={handleSubmit}
          >
            Continuar
          </Button>
        </Stack>
      </form>
    </StyledBussinessUnits>
  );
}

export { BussinessUnitsUI };
