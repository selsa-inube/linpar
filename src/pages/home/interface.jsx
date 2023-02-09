import { Header } from "../../components/Header";

import { MdOutlineDoorFront } from "react-icons/md";

import { StyledHome, StyledAppsList, StyledPageTitle } from "./styles";
import { AppCard } from "../../components/cards/AppCard";
import { PageTitle } from "../../components/PageTitle";

function HomeUI(props) {
  const { apps } = props;

  return (
    <StyledHome>
      <Header />
      <StyledPageTitle>
        <PageTitle
          title="Bienvenido, Leonardo"
          description="Selecciona una opción para empezar a ajustar la configuración de tu software Linix"
          icon={<MdOutlineDoorFront />}
        />
      </StyledPageTitle>
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
