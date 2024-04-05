import {
  HomeIcon,
  WindowIcon,
  RectangleStackIcon,
  RectangleGroupIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
// import { wi}
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import NavLinkComponent from "../components/adminPanelComponents/NavLinkComponent";
// import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "components/adminPanelComponents/LanguageSwitcher";
// import NavLinkComponent from "components/adminPanelComponents/NavLinkComponent";
// import ThemeSwitcher from "components/ThemeSwitcher";

function AdminPanel() {
  //   const { t } = useTranslation();
  const navigate = useNavigate();
  const logoutSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("logout")
        .then((res) => {
          if (res.data.status === 200) {
            localStorage.removeItem("token");
            navigate("/", { replace: true });
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="h-screen overflow-x-hidden dark:bg-gray-900">
      <div className="dark:bg-gray-900 dark:shadow-none md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 ">
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex items-center h-16 px-4 bg-red">
            <h1 className="text-xl font-bold text-white ">AdminPanel</h1>
          </div>
          <div className="flex flex-col flex-1 overflow-hidden shadow-right bg-pikedDark">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {/* <div className="flex items-center px-2 py-2 text-sm font-medium text-white dark:text-slate-600">
                მთავარი
              </div> */}

              <NavLinkComponent
                path="/adminpanel/dashboard"
                icon={<HomeIcon />}
                title="მთავარი"
              />
              {/* <Link
                to="/"
                className="flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:text-white hover:bg-red dark:hover:bg-slate-800 dark:shadow-none dark:hover:text-slate-600 hover:shadow-lg shadow-gray-500/50 "
                target="_blank"
              >
                <WindowIcon className="flex-shrink-0 w-6 h-6 mr-3" />
                საიტის ნახვა
              </Link> */}
              {/* <div className="flex items-center px-2 py-2 text-sm font-medium text-red dark:text-slate-600"></div> */}
              <NavLinkComponent
                path="/adminpanel/categories"
                icon={<RectangleStackIcon />}
                title="კატეგორია"
              />
              <NavLinkComponent
                path="/adminpanel/products"
                icon={<RectangleGroupIcon />}
                title="პროდუქტი"
              />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:pl-64 ">
        <div className="flex flex-shrink-0 h-16">
          <div className="flex justify-end flex-1 px-16 bg-white shadow dark:bg-slate-800">
            <div className="flex flex-1 mt-4 font-bold text-black "></div>
            <div className="flex items-center md:ml-6">
              {/* <ThemeSwitcher /> */}
              {/* <LanguageSwitcher /> */}
              <div className="relative justify-around ml-3">
                <div className="flex justify-around w-full ml-3">
                  <Link
                    to="/"
                    className="flex items-center px-2 py-2 text-sm font-medium text-black rounded-md hover:text-white hover:bg-red dark:hover:bg-slate-800 dark:shadow-none dark:hover:text-slate-600 hover:shadow-lg shadow-gray-500/50 "
                    target="_blank"
                  >
                    <WindowIcon className="flex-shrink-0 w-6 h-6 mr-3" />
                    საიტის ნახვა
                  </Link>
                  <button
                    type="button"
                    className="flex items-center px-2 py-2 text-sm font-medium text-gray-800 rounded-md bg-pikedDark hover:bg-red hover:text-white dark:bg-slate-900 dark:text-slate-700 dark:hover:text-slate-600"
                    onClick={logoutSubmit}
                  >
                    <ArrowRightStartOnRectangleIcon className="flex-shrink-0 w-6 h-6 text-white dark:text-slate-700 " />
                    <p className="text-white">გასვლა</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="w-full p-16 mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
