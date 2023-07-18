import { MemoryRouter, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CompleteInvitation } from "./index";

const story = {
  components: [CompleteInvitation],
  title: "layouts/privileges/outlets/users/complete-invitation",
  parameters: {
    layout: "fullscreen",
  },
};

const Default = () => (
  <MemoryRouter initialEntries={["/path/10"]}>
    <Routes>
      <Route path="/path/:invitation_id" element={<CompleteInvitation />} />
    </Routes>
  </MemoryRouter>
);

const InvitationNotFound = () => (
  <BrowserRouter>
    <CompleteInvitation />
  </BrowserRouter>
);

export { Default, InvitationNotFound };

export default story;
