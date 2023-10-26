import React from "react";
import { MdSearch } from "react-icons/md";
import { Button, Text, Textfield } from "@inube/design-system";
import { RadioClient } from "@components/cards/RadioClient";
import { IClientState, IClient } from "./types";
import {
  StyledClients,
  StyledClientsList,
  StyledNoResults,
  StyledClientsItem,
} from "./styles";

interface ClientsUIProps {
  clients: IClient[];
  search: string;
  client: IClientState;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClientChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterClients: (clients: IClient[], search: string) => IClient[];
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

function ClientsUI({
  clients,
  search,
  client,
  handleSearchChange,
  filterClients,
  handleClientChange,
  handleSubmit,
}: ClientsUIProps) {
  const filteredClients = filterClients(clients, search);

  return (
    <StyledClients>
      <Text type="title" as="h2" textAlign="center">
        Clientes
      </Text>
      <Text size="medium" textAlign="center">
        Selecciona la empresa a la que vas a representar
      </Text>
      <form>
        {clients.length > 10 && (
          <Textfield
            placeholder="Buscar..."
            type="search"
            name="searchClients"
            id="searchClients"
            value={search}
            fullwidth={true}
            onChange={handleSearchChange}
            iconBefore={<MdSearch size={22} />}
          />
        )}
        {filteredClients.length === 0 && <NoResultsMessage search={search} />}
        <StyledClientsList scroll={clients.length > 5}>
          {filteredClients.map((client) => (
            <StyledClientsItem key={client.id}>
              <RadioClient
                name="client"
                label={client.name}
                id={client.id}
                value={client.name}
                logo={client.logo}
                handleChange={handleClientChange}
              />
            </StyledClientsItem>
          ))}
        </StyledClientsList>
        <Button type="button" disabled={client.value} onClick={handleSubmit}>
          Continuar
        </Button>
      </form>
    </StyledClients>
  );
}

export { ClientsUI };
