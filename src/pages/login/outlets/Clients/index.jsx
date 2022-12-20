import { Form } from "react-router-dom";

import { RadioClient } from "../../../../components/cards/RadioClient";
import { Heading } from "../../../../components/data/Heading";
import { Text } from "../../../../components/data/Text";
import { Button } from "../../../../components/inputs/Button";

import { StyledClients } from "./styles";

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
        {mockClients.map((client) => (
          <RadioClient
            name="client"
            label={client.name}
            id={client.id}
            key={client.id}
            value={client.name}
            logo={client.logo}
          />
        ))}
        <Button label="Continuar" type="submit" />
      </Form>
    </StyledClients>
  );
}

export { Clients };
