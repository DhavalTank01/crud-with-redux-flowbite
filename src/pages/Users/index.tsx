import CustomBreadcrumb from "../../components/Breadcrumb";

const Users = () => {
  return (
    <main className="min-h-screen px-4 py-2.5 dark:bg-gray-800">
      <CustomBreadcrumb child="List" parent="Users" />
    </main>
  );
};

export default Users;
