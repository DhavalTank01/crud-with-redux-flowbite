import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { toast } from "react-toastify";
import Users from "./pages/Users";
import AddEditUser from "./pages/Users/AddEditUser";
import URLS from "./router/urls";

function App() {
  useEffect(() => {
    toast.success("Hello world")
  }, []);

  return (
    <Routes>
      <Route path={URLS.USERS} element={<Users />} />
      <Route path={URLS.ADD_USER} element={<AddEditUser />} />
      <Route path={URLS.EDIT_USER(":slug")} element={<AddEditUser />} />
      <Route path={URLS.VIEW_USER(":slug")} element={<AddEditUser />} />
      <Route index element={<Users />} />
    </Routes>
  )
  // return (
  //   <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
  //     <h1 className="text-2xl dark:text-white">Flowbite React + Vite</h1>
  //     <DarkThemeToggle />
  //   </main>
  // );
}

export default App;
