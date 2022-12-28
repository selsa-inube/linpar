import { HomeUI } from "./interface";

import { mockApps } from "../../mocks/home/apps.mock";

function Home() {
  return <HomeUI apps={mockApps} />;
}

export { Home };
