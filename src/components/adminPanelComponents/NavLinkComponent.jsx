// import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const NavLinkComponent = (props) => {
  //   const { t } = useTranslation();
  const { path, icon, title } = props;

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "flex items-center px-2 py-2 text-sm font-medium  text-white shadow-lg  bg-red  rounded-md dark:bg-slate-800  dark:shadow-none dark:text-blue-700 "
          : "flex items-center px-2 py-2 text-sm font-medium text-gray-400 rounded-md hover:shadow-lg  hover:text-white hover:bg-red dark:hover:bg-slate-800 dark:shadow-none dark:hover:text-slate-600"
      }
    >
      <div className="flex-shrink-0 w-6 h-6 mr-3">{icon}</div>
      {title}
    </NavLink>
  );
};

export default NavLinkComponent;
