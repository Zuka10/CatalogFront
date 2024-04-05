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
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    setIsLoading(true);
    try {
      await axios
        .get("product")
        .then((res) => {
          setProduct(res.data);
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

  const deleteProduct = async (id) => {
    try {
      await axios
        .delete(`product/${id}`)
        .then(() => {
          getProduct();
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

  const filteredCountries = products.filter((category) => {
    return category.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Fragment>
      <Toaster />
      <Nameless
        icon={<CircleStackIcon />}
        btnIcon={<PlusIcon />}
        title="პროდუქტები"
        path="create-product"
        action="დაამატე პროდუქტი"
      />
      <div className="mt-20 ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          type="search"
          id="search"
          placeholder="მოძებნე..."
          className="p-2 px-12 mb-4 bg-no-repeat rounded-lg shadow-inner outline-none bg-gray-300/50 dark:placeholder-gray-600 dark:bg-slate-800 dark:text-slate-500 bg bg-left-1 bg-search"
        />
      </div>
      <div>
        <table className="w-full text-center divide-y divide-gray-200 rounded-md shadow-2xl bg-gray-300/50 dark:divide-slate-700 ">
          <TableThead
            titles={[
              "id",
              "სახელი",
              "აღწერა",
              "ფასი",
              "კატეგორია",
              "სურათი",
              "ფუნქცია",
            ]}
          />
          <tbody className="flex flex-col items-center w-full overflow-y-hidden bg-white lg:overflow-x-hidden lg:overflow-y-scroll dark:bg-slate-800 rounded-b-md h-96 ">
            {!isLoading &&
              products.length > 0 &&
              filteredCountries.map((product) => (
                <tr
                  className="flex w-full bg-white dark:bg-slate-800"
                  key={product.id}
                >
                  <td className="w-1/4 p-4 px-6 text-gray-900 dark:text-slate-600">
                    {product.id}
                  </td>
                  <td className="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
                    {product.name}
                  </td>
                  <td className="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
                    {product.description}
                  </td>
                  <td className="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
                    {product.unitPrice}
                  </td>
                  <td className="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
                    {product.category}
                  </td>
                  <td className="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
                    <img
                      className="ml-6"
                      key={product.id}
                      src={`${import.meta.env.VITE_ecommerce_api}${
                        product.images[0]
                      }`}
                      width="64"
                      height="64"
                      alt="movie img"
                    />
                  </td>
                  <td className="w-1/4 p-4 px-6 text-center ">
                    <Link to={`/adminpanel/categories/${product.id}/edit`}>
                      <button className="ml-4">
                        <PencilIcon className="w-6 h-6 text-blue-400 hover:text-blue-500 dark:text-slate-700 hover:dark:text-slate-500" />
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="ml-2"
                    >
                      <TrashIcon className="w-6 h-6 opacity-70 text-red hover:opacity-100 dark:text-slate-700 hover:dark:text-slate-500" />
                    </button>
                  </td>
                </tr>
              ))}
            {!isLoading && products.length === 0 && <NoInfromationAvailable />}
            {isLoading && <Loading />}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default Index;
