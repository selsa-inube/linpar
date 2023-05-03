import { RadioClient } from "../../../../components/cards/RadioClient";
import { Text } from "../../../../components/data/Text";
import { Button, TextField } from "@inube/design-system";

import { MdSearch } from "react-icons/md";

import {
  StyledClients,
  StyledClientsList,
  StyledNoResults,
  StyledClientsItem,
} from "./styles";

function ClientsUI(props) {
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
      <Text as="h2" align="center" typoToken="titleLarge">
        Clientes
      </Text>
      <Text align="center">
        Selecciona la empresa a la que vas a representar
      </Text>
      <form onSubmit={handleSubmit}>
        {clients.length > 10 && (
          <>
            <TextField
              placeholder="Search..."
              type="search"
              name="searchClients"
              id="searchClients"
              value={search}
              minLength={1}
              isFullWidth={true}
              handleChange={handleSearchChange}
              iconBefore={<MdSearch size={22} />}
            />
          </>
        )}
        {!filterClients().length && (
          <StyledNoResults>
            <Text>{`No se encontraron resultados para "${search}".`}</Text>
            <Text>{`Por favor, intenta modificando los parámetros de búsqueda.`}</Text>
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
        <Button type="submit" isDisabled={client.value ? false : true}>
          Continuar
        </Button>
      </form>
    </StyledClients>
  );
}

export { ClientsUI };
