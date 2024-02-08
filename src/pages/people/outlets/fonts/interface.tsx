import { Breadcrumbs, Stack, useMediaQuery, inube } from "@inube/design-system";
import { PageTitle } from "@components/PageTitle";
import { peopleOptionsConfig } from "../options/config/people.config";
import { RenderFormFonts } from "./form/RenderFormFonts";

export function FontsUI() {
  const smallScreen = useMediaQuery("(max-width: 970px)");
  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={smallScreen ? "s300" : "s400 s800"}
      gap={inube.spacing.s600}
    >
      <Stack gap="48px" direction="column">
        <Stack gap="24px" direction="column">
          <Breadcrumbs crumbs={peopleOptionsConfig[4].crumbs} />
          <PageTitle
            title={peopleOptionsConfig[4].label}
            description={peopleOptionsConfig[4].description}
            navigatePage="/people"
          />
        </Stack>
      </Stack>
      <RenderFormFonts />
    </Stack>
  );
}
