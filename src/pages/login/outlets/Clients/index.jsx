import { useState } from "react";
import { Form } from "react-router-dom";

import { RadioClient } from "../../../../components/cards/RadioClient";
import { Heading } from "../../../../components/data/Heading";
import { Text } from "../../../../components/data/Text";
import { Button } from "../../../../components/inputs/Button";

import { StyledClients, StyledClientsList, StyledClientsItem } from "./styles";

import { mockClients } from "../../../../mocks/login/mock.clients";
import { SearchInput } from "../../../../components/inputs/Input";

function Clients() {
  const [search, setSearch] = useState("");
  const [client, setClient] = useState("");

  function handleSearchChange({ target }) {
    setSearch(target.value);
  }

  function filterClients() {
    return mockClients.filter((client) =>
      client.name.toUpperCase().includes(search.toUpperCase())
    );
  }

  function handleClientChange({ target }) {
    setClient(target.value);
  }

  return (
    <StyledClients>
      <Heading level="2" typoToken="titleLarge" align="center">
        Clientes
      </Heading>
      <Text align="center">
        Selecciona la empresa a la que vas a representar
      </Text>
      <Form>
        {mockClients.length > 10 && (
          <SearchInput
            placeholder="Search"
            value={search}
            handleChange={handleSearchChange}
          />
        )}
        <StyledClientsList scroll={mockClients.length > 5}>
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
          disabled={client ? false : true}
        />
      </Form>
    </StyledClients>
  );
}

export { Clients };
