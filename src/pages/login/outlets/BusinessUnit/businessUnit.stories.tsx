import React from "react";
import { BrowserRouter } from "react-router-dom";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";
import { BusinessUnits } from ".";

const story = {
  components: [BusinessUnits],
  title: "layouts/login/outlets/businessUnits",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = () => <BusinessUnits businessUnits={businessUnitDataMock} />;

export { Default };
export default story;
