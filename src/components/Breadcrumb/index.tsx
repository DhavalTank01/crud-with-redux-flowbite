import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { convertTextCase } from "../../utils";

interface CustomBreadcrumbPropsTypes {
  parent: string;
  child?: string;
  grandChild?: string;
}

const CustomBreadcrumb = ({
  parent,
  child,
  grandChild,
}: CustomBreadcrumbPropsTypes) => {
  return (
    <Breadcrumb
      aria-label="Default breadcrumb example"
      className="bredcrumb-wrapper bg-gray-50 px-5 py-3 dark:bg-gray-700"
    >
      <Breadcrumb.Item icon={HiHome} onClick={() => {}}>
        {convertTextCase(parent, "capitalize")}
      </Breadcrumb.Item>
      {grandChild ? (
        <Breadcrumb.Item>
          {convertTextCase(child, "capitalize")}
        </Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item>
          {convertTextCase(child, "capitalize")}
        </Breadcrumb.Item>
      )}
      {grandChild && (
        <Breadcrumb.Item>
          {convertTextCase(grandChild, "capitalize")}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
