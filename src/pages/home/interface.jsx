import { Heading } from "../../components/data/Heading";
import { Text } from "../../components/data/Text";
import { Header } from "../../components/Header";
import { Stack } from "../../components/layout/Stack";

import { MdOutlineDoorFront } from "react-icons/md";

import { StyledHome, StyledGreetingContainer, StyledAppsList } from "./styles";
import { AppCard } from "../../components/cards/AppCard";

function HomeUI(props) {
  const { apps } = props;

  return (
    <StyledHome>
      <Header />
      <StyledGreetingContainer>
        <Stack spacing="8">
          <Stack direction="row" spacing="8" align="center">
            <MdOutlineDoorFront />
            <Heading level="1">Bienvenido, Leonardo</Heading>
          </Stack>
          <Text>
            Selecciona una opción para empezar a ajustar la configuración de tu
            software Linix
          </Text>
        </Stack>
      </StyledGreetingContainer>
      <StyledAppsList>
        {apps.map((app) => (
          <AppCard
            key={app.id}
            label={app.label}
            description={app.description}
            icon={app.icon}
          />
        ))}
      </StyledAppsList>
    </StyledHome>
  );
}

export { HomeUI };
