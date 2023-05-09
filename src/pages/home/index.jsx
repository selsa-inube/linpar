import { HomeUI } from "./interface";

import { appsConfig } from "../home/config/apps.config";

function Home() {
  return <HomeUI apps={appsConfig} />;
}

export { Home };
