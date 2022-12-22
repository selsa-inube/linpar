import { MdSearch } from "react-icons/md";
import { StyledIconInput, StyledIcon, StyledInput } from "./styles";

function IconInput(props) {
  const { type = "text", value, icon, placeholder, handleChange } = props;

  return (
    <StyledIconInput>
      <StyledIcon>{icon}</StyledIcon>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </StyledIconInput>
  );
}

function SearchInput(props) {
  return <IconInput {...props} icon={<MdSearch />} />;
}

export { IconInput, SearchInput };
