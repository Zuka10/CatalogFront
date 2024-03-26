import { Fragment, useEffect, useState } from "react";
import {
  CircleStackIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { Link } from "react-router-dom";

import TableThead from "../../components/adminPanelComponents/TableThead";
import Loading from "../../components/frontendComponents/Loading";
import NoInfromationAvailable from "../../components/adminPanelComponents/NoInfromationAvailable";
import Nameless from "../../components/adminPanelComponents/Namless";

import toast, { Toaster } from "react-hot-toast";

function Index() {
  const [categories, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    setIsLoading(true);
    try {
      await axios
        .get("category")
        .then((res) => {
          setMovies(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  const errorMessage = "Failed to delete";
  const successfullyMessage = "Deleted Successfully";

  const deleteCategory = async (id) => {
    try {
      await axios
        .delete(`category/${id}`)
        .then(() => {
          getCategory();
          toast.success(successfullyMessage, {
            className:
              "bg-gray-50 shadow-lg dark:bg-slate-900 dark:text-slate-500",
          });
        })
        .catch(() => {
          toast.error(errorMessage, {
            className:
              "bg-gray-50 shadow-lg dark:bg-slate-900 dark:text-slate-500",
          });
        });
    } catch (err) {
      console.error(err);
    }
  };

  const filteredCountries = categories.filter((category) => {
    return category.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Fragment>
      <Toaster />
      <Nameless
        icon={<CircleStackIcon />}
        btnIcon={<PlusIcon />}
        title="All Category"
        path="create-category"
        action="Add Category"
      />
      <div className="mt-20">
        <input
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          type="search"
          id="search"
          placeholder="Search by movie"
          className="p-2 px-12 mb-4 bg-no-repeat rounded-lg shadow-sm outline-none dark:placeholder-gray-600 dark:bg-slate-800 dark:text-slate-500 bg bg-left-1 bg-search"
        />
      </div>
      <div>
        <table className="w-full text-center divide-y divide-gray-200 shadow-md dark:divide-slate-700 ">
          <TableThead titles={["id", "Category", "action"]} />
          <tbody className="flex flex-col items-center w-full overflow-x-hidden overflow-y-scroll bg-white dark:bg-slate-800 rounded-b-md h-96 ">
            {!isLoading &&
              categories.length > 0 &&
              filteredCountries.map((category) => (
                <tr
                  className="flex w-full bg-white dark:bg-slate-800"
                  key={category.id}
                >
                  <td className="w-1/4 p-4 px-6 text-gray-900 dark:text-slate-600">
                    {category.id}
                  </td>
                  <td className="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
                    {category.name}
                  </td>
                  <td className="w-1/4 p-4 px-6 text-center ">
                    <Link to={`/adminpanel/movies/${category.id}/edit`}>
                      <button className="ml-4">
                        <PencilIcon className="w-6 h-6 text-blue-300 hover:text-blue-500 dark:text-slate-700 hover:dark:text-slate-500" />
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteCategory(category.id)}
                      className="ml-2"
                    >
                      <TrashIcon className="w-6 h-6 text-red-300 hover:text-red-500 dark:text-slate-700 hover:dark:text-slate-500" />
                    </button>
                  </td>
                </tr>
              ))}
            {!isLoading && categories.length === 0 && (
              <NoInfromationAvailable />
            )}
            {isLoading && <Loading />}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default Index;
