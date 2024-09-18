import { PeopleOptionsUI } from "./interface";
import { peopleOptionsConfig } from "./config/people.config";
import { appsConfig } from "@components/layout/AppPage/config/apps.config";

function PeopleOptions() {
  return (
    <PeopleOptionsUI
      appName={appsConfig[2].label}
      appDescription={appsConfig[2].description}
      appOptions={peopleOptionsConfig}
      appRoute={appsConfig[2].crumbs}
    />
  );
}

export { PeopleOptions };
