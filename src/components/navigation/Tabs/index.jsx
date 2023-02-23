import { Tab } from "../Tab";
import { StyledTabsContainer, StyledLine } from "./styles";
import { useState } from "react";

function Tabs(props) {
  const { titles } = props;
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <StyledTabsContainer>
        {titles.map((title, id) => (
          <Tab
            key={id}
            id={id}
            title={title}
            isActive={activeTab === id}
            handleClick={handleClick}
          />
        ))}
      </StyledTabsContainer>
      <StyledLine />
    </>
  );
}

export { Tabs };
