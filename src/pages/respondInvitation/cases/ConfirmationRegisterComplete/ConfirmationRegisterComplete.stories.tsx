import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { ConfirmationRegisterComplete } from "./index";

const story = {
  components: [ConfirmationRegisterComplete],
  title: "layouts/respondInvitation/cases/ConfirmationRegisterComplete",
  parameters: {
    layout: "fullscreen",
  },
};

const Default = () => (
  <MemoryRouter initialEntries={["/path/1"]}>
    <Routes>
      <Route
        path="/path/:businessUnit_id"
        element={<ConfirmationRegisterComplete />}
      />
    </Routes>
  </MemoryRouter>
);

const WithoutClient = () => (
  <BrowserRouter>
    <ConfirmationRegisterComplete />
  </BrowserRouter>
);

export { Default, WithoutClient };

export default story;
