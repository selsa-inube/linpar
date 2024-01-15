import { Stack } from "@inube/design-system";
import { useEffect, useRef } from "react";
import { MenuLink } from "../MenuLink";
import { MenuOption } from "../MenuOption";
import { StyledMenu, StyledMenuContainer } from "./styles";
import { IOption } from "./types";
import { useCallback } from "react";

interface MenuProps {
  options: IOption[];
  handleClose: () => void;
}

const renderMenuItems = (options: IOption[]) => {
  return options.map((option) => {
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
  });
};

function Menu(props: MenuProps) {
  const { options, handleClose } = props;

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleWindowClick = useCallback(
    (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleWindowClick);

    return () => {
      window.removeEventListener("mousedown", handleWindowClick);
    };
  }, [handleWindowClick]);

  return (
    <StyledMenu ref={mobileMenuRef}>
      <StyledMenuContainer>
        <Stack direction="column">{renderMenuItems(options)}</Stack>
      </StyledMenuContainer>
    </StyledMenu>
  );
}

export { Menu };
export type { MenuProps };
