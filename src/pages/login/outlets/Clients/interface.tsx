import { RadioClient } from "@components/cards/RadioClient";
import { Button, Text, TextField } from "@inube/design-system";
import { IClientState } from "./types";

import { MdSearch } from "react-icons/md";

import {
  StyledClients,
  StyledClientsItem,
  StyledClientsList,
  StyledNoResults,
} from "./styles";

interface ClientsUIProps {
  clients: Client[];
  search: string;
  client: IClientState;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClientChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterClients: () => Client[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface Client {
  id: number;
  name: string;
  logo: string;
}

function ClientsUI(props: ClientsUIProps) {
  const {
    clients,
    search,
    client,
    handleSearchChange,
    handleClientChange,
    filterClients,
    handleSubmit,
  } = props;

  return (
    <StyledClients>
      <Text as="h2" align="center" typo="titleLarge">
        Clientes
      </Text>
      <Text typo="bodyMedium" align="center">
        Selecciona la empresa a la que vas a representar
      </Text>
      <form onSubmit={handleSubmit}>
        {clients.length > 10 && (
          <TextField
            placeholder="Buscar..."
            type="search"
            name="searchClients"
            id="searchClients"
            value={search}
            minLength={1}
            isFullWidth={true}
            handleChange={handleSearchChange}
            iconBefore={<MdSearch size={22} />}
          />
        )}
        {!filterClients().length && (
          <StyledNoResults>
            <Text typo="bodyMedium">{`No se encontraron resultados para "${search}".`}</Text>
            <Text typo="bodyMedium">{`Por favor, intenta modificando los parámetros de búsqueda.`}</Text>
          </StyledNoResults>
        )}
        <StyledClientsList scroll={clients.length > 5}>
          {filterClients().map((client) => (
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
        <Button type="submit" isDisabled={client.value}>
          Continuar
        </Button>
      </form>
    </StyledClients>
  );
}

export { ClientsUI };
