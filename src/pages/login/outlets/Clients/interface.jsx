import { Form } from "react-router-dom";

import { RadioClient } from "../../../../components/cards/RadioClient";
import { Heading } from "../../../../components/data/Heading";
import { Text } from "../../../../components/data/Text";
import { Button } from "../../../../components/inputs/Button";
import { SearchInput } from "../../../../components/inputs/Input";

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
  } = props;

  return (
    <StyledClients>
      <Heading level="2" typoToken="titleLarge" align="center">
        Clientes
      </Heading>
      <Text align="center">
        Selecciona la empresa a la que vas a representar
      </Text>
      <Form>
        {clients.length > 10 && (
          <SearchInput
            placeholder="Search"
            value={search}
            handleChange={handleSearchChange}
          />
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
        <Button
          label="Continuar"
          type="submit"
          disabled={client.value ? false : true}
        />
      </Form>
    </StyledClients>
  );
}

export { ClientsUI };
