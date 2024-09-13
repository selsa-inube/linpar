import React from "react";
import { BrowserRouter } from "react-router-dom";

import { businessUnitDataMock } from "@src/mocks/login/businessUnit.mock";
import { BussinessUnits } from ".";

const story = {
  components: [BussinessUnits],
  title: "layouts/login/outlets/clients",
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

const Default = () => <BussinessUnits bussinessUnits={businessUnitDataMock} />;

export { Default };
export default story;
