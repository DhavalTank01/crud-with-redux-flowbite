import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { toast } from "react-toastify";
import Users from "./pages/Users";
import AddEditUser from "./pages/Users/AddEditUser";
import URLS from "./router/urls";

function App() {
  useEffect(() => {
    toast.success("Hello world");
  }, []);

  return (
    <Routes>
      <Route path={URLS.USERS} element={<Users />} />
      <Route path={URLS.ADD_USER} element={<AddEditUser />} />
      <Route path={URLS.EDIT_USER(":slug")} element={<AddEditUser />} />
      <Route path={URLS.VIEW_USER(":slug")} element={<AddEditUser />} />
      <Route index element={<Users />} />
    </Routes>
  );
}

export default App;
