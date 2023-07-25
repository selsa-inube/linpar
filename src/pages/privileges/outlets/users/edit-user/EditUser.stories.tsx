import { EditUser } from "./index";
import { MemoryRouter, Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

const story = {
  components: [EditUser],
  title: "layouts/privileges/outlets/users/edit-user",
  parameters: {
    layout: "fullscreen",
  },
};

const Default = () => (
  <MemoryRouter initialEntries={["/path/11"]}>
    <Routes>
      <Route path="/path/:user_id" element={<EditUser />} />
    </Routes>
  </MemoryRouter>
);

const UserNotFound = () => (
  <BrowserRouter>
    <EditUser />
  </BrowserRouter>
);

export { Default, UserNotFound };

export default story;
