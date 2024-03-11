import { useRef, useState } from "react";
import { Text } from "@inube/design-system";

import { StyledDropdownItem } from "./styles";

interface DropdownItemProps {
  id: string;
  isDisabled?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
  value: string;
  onClick?: (id: string) => void;
  onSelect?: (label: string) => void;
}

function DropdownItem(props: DropdownItemProps) {
  const {
    id,
    isDisabled = false,
    isSelected = false,
    isFocused = false,
    value,
    onClick,
    onSelect,
  } = props;

  const [select, setSelect] = useState(isSelected);
  const itemRef = useRef(null);

  const handleOptionClick = (label: string) => {
    if (isDisabled) return;
    setSelect(true);

    if (onClick) onClick(id);

    if (onSelect) onSelect(label);
  };

  const interceptorOnBlur = () => {
    setSelect(false);
  };

  return (
    <StyledDropdownItem
      id={id}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={select}
      onClick={() => handleOptionClick(value)}
      ref={itemRef}
      onBlur={interceptorOnBlur}
      tabIndex={0}
    >
      <Text size="medium" type="body">
        {value}
      </Text>
    </StyledDropdownItem>
  );
}

export { DropdownItem };
export type { DropdownItemProps };
