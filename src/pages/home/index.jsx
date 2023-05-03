import { HomeUI } from "./interface";

import { mockAppsConfig } from "../home/config/apps.config";

function Home() {
  return <HomeUI apps={mockAppsConfig} />;
}

export { Home };
