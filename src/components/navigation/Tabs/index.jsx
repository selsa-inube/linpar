import { Tab } from "../Tab";
import { StyledTabsContainer, StyledLine } from "./styles";
import { useEffect, useState } from "react";

function Tabs(props) {
  const { tabs, selected, handleTabChange } = props;
  const [activeTab, setActiveTab] = useState(selected);

  useEffect(() => {
    setActiveTab(selected);
  }, [selected]);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    handleTabChange(tabId);
  };

  return (
    <>
      <StyledTabsContainer>
        {tabs.map(({ id, content }) => (
          <Tab
            key={id}
            id={id}
            title={content.charAt(0).toUpperCase() + content.slice(1)}
            isActive={id === activeTab}
            handleClick={handleClick}
          />
        ))}
      </StyledTabsContainer>
      <StyledLine />
    </>
  );
}

export { Tabs };
