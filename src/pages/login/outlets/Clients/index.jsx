import { Form } from "react-router-dom";

import { RadioClient } from "../../../../components/cards/RadioClient";
import { Heading } from "../../../../components/data/Heading";
import { Text } from "../../../../components/data/Text";
import { Button } from "../../../../components/inputs/Button";

import { StyledClients, StyledClientsList, StyledClientsItem } from "./styles";

import { mockClients } from "../../../../mocks/login/mock.clients";

function Clients() {
  return (
    <StyledClients>
      <Heading level="2" token="titleLarge" align="center">
        Clientes
      </Heading>
      <Text align="center">
        Selecciona la empresa a la que vas a representar
      </Text>
      <Form>
        <StyledClientsList scroll={mockClients.length > 5}>
          {mockClients.map((client) => (
            <StyledClientsItem key={client.id}>
              <RadioClient
                name="client"
                label={client.name}
                id={client.id}
                value={client.name}
                logo={client.logo}
              />
            </StyledClientsItem>
          ))}
        </StyledClientsList>
        <Button label="Continuar" type="submit" />
      </Form>
    </StyledClients>
  );
}

export { Clients };
