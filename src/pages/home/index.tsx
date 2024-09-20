import { mockAppCards } from "@mocks/home/cards.mock";
import { HomeUI } from "./interface";

function Home() {
  return <HomeUI data={mockAppCards} />;
}

export { Home };
