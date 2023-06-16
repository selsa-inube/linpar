import { Stack } from "@inube/design-system";
import React, { useEffect, useRef } from "react";
import { MenuLink } from "../MenuLink";
import { MenuOption } from "../MenuOption";
import { StyledMenu, StyledMenuContainer } from "./styles";
import { IOption } from "./types";

interface RenderMenuItemsProps {
  options: IOption[];
}

const RenderMenuItems = (props: RenderMenuItemsProps) => {
  const { options } = props;

  return React.Children.toArray(
    options.map((option) => {
      if (option.path) {
        return (
          <MenuLink
            label={option.label}
            key={option.id}
            icon={option.icon}
            path={option.path}
          />
        );
      }
      if (option.handleClick) {
        return (
          <MenuOption
            label={option.label}
            key={option.id}
            icon={option.icon}
            handleClick={option.handleClick}
          />
        );
      }
      return null;
    })
  );
};

interface MenuProps {
  options: IOption[];
  handleClose: () => void;
}

function Menu(props: MenuProps) {
  const { options, handleClose } = props;

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleWindowClick);

    return () => {
      window.removeEventListener("mousedown", handleWindowClick);
    };
  }, []);

  const handleWindowClick = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node)
    ) {
      handleClose();
    }
  };

  const renderMenuItems = RenderMenuItems({ options });

  return (
    <StyledMenu ref={mobileMenuRef}>
      <StyledMenuContainer>
        <Stack direction="column">{renderMenuItems}</Stack>
      </StyledMenuContainer>
    </StyledMenu>
  );
}

export { Menu };
export type { MenuProps };
