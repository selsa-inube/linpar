import { Stack } from "@inube/design-system";
import { useEffect, useRef } from "react";
import { MenuLink } from "../MenuLink";
import { MenuOption } from "../MenuOption";
import { StyledMenu, StyledMenuContainer } from "./styles";

const RenderMenuItems = (props) => {
  const { options } = props;

  return options.map((option) => {
    if (option.hasOwnProperty("path")) {
      return (
        <MenuLink
          label={option.label}
          key={option.id}
          icon={option.icon}
          path={option.path}
        />
      );
    }
    return (
      <MenuOption
        label={option.label}
        key={option.id}
        icon={option.icon}
        handleClick={option.handleClick}
      />
    );
  });
};

function Menu(props) {
  const { options, handleClose } = props;

  const mobileMenuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleWindowClick);

    return () => {
      window.removeEventListener("mousedown", handleWindowClick);
    };
  }, []);

  const handleWindowClick = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      handleClose();
    }
  };

  return (
    <StyledMenu ref={mobileMenuRef}>
      <StyledMenuContainer>
        <Stack direction="column">
          <RenderMenuItems options={options} />
        </Stack>
      </StyledMenuContainer>
    </StyledMenu>
  );
}

export { Menu };
