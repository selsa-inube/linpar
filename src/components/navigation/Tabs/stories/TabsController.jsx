import { useState } from "react";
import { Tabs } from "../../Tabs";

function TabsController(props) {
  const { tabs } = props;
  const [selected, setSelected] = useState(tabs[0].id);

  const handleTabChange = (tabId) => {
    setSelected(tabId);
  };

  return (
    <Tabs tabs={tabs} selected={selected} handleTabChange={handleTabChange} />
  );
}

export { TabsController };
