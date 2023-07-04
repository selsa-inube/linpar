import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { RespondInvitation } from "./index";

const story = {
  components: [RespondInvitation],
  title: "layouts/respondInvitation",
  parameters: {
    layout: "fullscreen",
  },
};

const Default = () => (
  <MemoryRouter initialEntries={["/path/1/11"]}>
    <Routes>
      <Route
        path="/path/:client_id/:invitation_id"
        element={<RespondInvitation />}
      />
    </Routes>
  </MemoryRouter>
);

const ExpiredInvitation = () => (
  <MemoryRouter initialEntries={["/path/1/10"]}>
    <Routes>
      <Route
        path="/path/:client_id/:invitation_id"
        element={<RespondInvitation />}
      />
    </Routes>
  </MemoryRouter>
);

const ErrorWithClient = () => (
  <MemoryRouter initialEntries={["/path/1/0000"]}>
    <Routes>
      <Route
        path="/path/:client_id/:invitation_id"
        element={<RespondInvitation />}
      />
    </Routes>
  </MemoryRouter>
);

const ErrorWithoutClient = () => (
  <BrowserRouter>
    <RespondInvitation />
  </BrowserRouter>
);

export { Default, ErrorWithClient, ErrorWithoutClient, ExpiredInvitation };

export default story;
