import React from "react";
import { MdSearch } from "react-icons/md";
import { Button, Text, Textfield, Stack, inube } from "@inube/design-system";

import { IClientState } from "./types";

import {
  StyledBussinessUnits,
  StyledBussinessUnitsList,
  StyledNoResults,
  StyledBussinessUnitsItem,
} from "./styles";
import { RadioBusinessUnit } from "@src/components/cards/RadioBusinessUnit ";
import { IBussinessUnit } from "@src/context/AppContext/types";

interface BussinessUnitsUIProps {
  clients: IBussinessUnit[];
  search: string;
  client: IClientState;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClientChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterBussinessUnits: (
    clients: IBussinessUnit[],
    search: string
  ) => IBussinessUnit[];
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
  clients,
  search,
  client,
  handleSearchChange,
  filterBussinessUnits,
  handleClientChange,
  handleSubmit,
}: BussinessUnitsUIProps) {
  const filteredBussinessUnits = filterBussinessUnits(clients, search);

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
          {clients.length > 10 && (
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
          <StyledBussinessUnitsList $scroll={clients.length > 5}>
            <Stack
              direction="column"
              padding="s0 s100"
              alignItems="center"
              gap={inube.spacing.s100}
            >
              {filteredBussinessUnits.map((client) => (
                <StyledBussinessUnitsItem key={client.id}>
                  <RadioBusinessUnit
                    name="client"
                    label={client.name}
                    id={client.id}
                    value={client.name}
                    logo={client.logo}
                    handleChange={handleClientChange}
                  />
                </StyledBussinessUnitsItem>
              ))}
            </Stack>
          </StyledBussinessUnitsList>
          <Button type="button" disabled={client.value} onClick={handleSubmit}>
            Continuar
          </Button>
        </Stack>
      </form>
    </StyledBussinessUnits>
  );
}

export { BussinessUnitsUI };
