import { Stack } from "@inube/design-system";
import { useEffect, useRef } from "react";
import { MenuOption } from "../MenuOption";
import { StyledMenu, StyledMenuContainer } from "./styles";

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
          {options.map((option) => (
            <MenuOption
              label={option.label}
              key={option.id}
              icon={option.icon}
              option={option.option}
            />
          ))}
        </Stack>
      </StyledMenuContainer>
    </StyledMenu>
  );
}

export { Menu };
