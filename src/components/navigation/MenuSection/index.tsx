import { inube, Stack } from "@inube/design-system";
import { Divider } from "@src/components/layout/Divider";
import { MenuHeading } from "../MenuHeading";
import { ISection } from "./types";
import { MenuItemSpacingType } from "../MenuItem/types";

import { MenuItem } from "../MenuItem";

interface MenuSectionProps {
  sections: ISection[];
  spacing?: MenuItemSpacingType;
  divider?: boolean;
}

function MenuSection(props: MenuSectionProps) {
  const { sections, spacing = "wide", divider = false } = props;

  return (
    <>
      {sections.map((section, index) => (
        <Stack key={index} width="312px" direction="column">
          {divider && (
            <Stack
              key={index}
              width="280px"
              margin="s0 s0 s0 s200"
              direction="column"
            >
              <Divider />
            </Stack>
          )}

          {section.title && <MenuHeading title={section.title} />}
          <Stack
            direction="column"
            gap={spacing === "compact" ? inube.spacing.s050 : inube.spacing.s0}
            margin={`${inube.spacing.s075} ${inube.spacing.s0}`}
          >
            {section.links.map((link, linkIndex) => (
              <MenuItem
                key={linkIndex}
                title={link.title}
                description={link.description}
                iconBefore={link.iconBefore}
                iconAfter={link.iconAfter}
                isDisabled={link.isDisabled}
                path={link.path}
                onClick={link.onClick}
                spacing={spacing}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </>
  );
}

export type { MenuSectionProps };
export { MenuSection };
