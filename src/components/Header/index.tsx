import { DarkThemeToggle, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          CRUD App With Redux With Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
      </div>
    </Navbar>
  );
};

export default Header;
