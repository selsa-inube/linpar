import { PeopleOptionsUI } from "./interface";
import { peopleOptionsConfig } from "./config/people.config";
import { appsConfig } from "../../../home/config/apps.config";

function PeopleOptions() {
  return (
    <PeopleOptionsUI
      appName={appsConfig[1].label}
      appDescription={appsConfig[1].description}
      appOptions={peopleOptionsConfig}
      appRoute={appsConfig[1].crumbs}
    />
  );
}

export { PeopleOptions };
