import { Stack } from "@inube/design-system";
import { useEffect, useRef } from "react";
import { MenuLink } from "../MenuLink";
import { MenuOption } from "../MenuOption";
import { StyledMenu, StyledMenuContainer } from "./styles";

interface OptionProps {
  id: string;
  label: string;
  icon: JSX.Element;
  path?: string;
  handleClick?: () => void;
}

interface RenderMenuItemsProps {
  options: OptionProps[];
}

const RenderMenuItems = (props: RenderMenuItemsProps) => {
  const { options } = props;

  return options.map((option) => {
    if (option.hasOwnProperty("path")) {
      return (
        <MenuLink
          label={option.label}
          key={option.id}
          icon={option.icon}
          path={option.path as string}
        />
      );
    }
    return (
      <MenuOption
        label={option.label}
        key={option.id}
        icon={option.icon}
        handleClick={option.handleClick as () => void}
      />
    );
  });
};

interface MenuProps {
  options: OptionProps[];
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

  return (
    <StyledMenu ref={mobileMenuRef}>
      <StyledMenuContainer>
        <Stack direction="column">{RenderMenuItems({ options })}</Stack>
      </StyledMenuContainer>
    </StyledMenu>
  );
}

export { Menu };
export type { OptionProps, MenuProps };
