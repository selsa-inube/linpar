import { Tab } from "../Tab";
import { StyledContainer, StyledTabsContainer, StyledLine } from "./styles";

function Tabs(props) {
  const { tabs, selected, handleTabChange } = props;

  return (
    <StyledContainer>
      <StyledTabsContainer>
        {tabs.map(({ id, content }) => (
          <Tab
            key={id}
            id={id}
            title={content.charAt(0).toUpperCase() + content.slice(1)}
            isActive={id === selected}
            handleTabChange={handleTabChange}
          />
        ))}
      </StyledTabsContainer>
      <StyledLine />
    </StyledContainer>
  );
}

export { Tabs };
