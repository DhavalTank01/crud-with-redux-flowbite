import { useParams } from "react-router";
import CustomBreadcrumb from "../../components/Breadcrumb";

const AddEditUser = () => {
  const { slug } = useParams();
  console.log("slug :>> ", slug);
  return (
    <main className="min-h-screen px-4 py-2.5 dark:bg-gray-800">
      <CustomBreadcrumb child="Add" parent="Users" />
    </main>
  );
};

export default AddEditUser;
