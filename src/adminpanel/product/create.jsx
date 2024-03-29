import { CircleStackIcon, EyeIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import Button from "../../components/adminPanelComponents/Button";
import Title from "../../components/Title";
import Nameless from "../../components/adminPanelComponents/Namless";
import toast, { Toaster } from "react-hot-toast";

function Create() {
  Title("Movie | Create");

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
      });
    }
  }, [formState, reset]);

  const errorMessage = "Failed to create";
  const successfullyMessage = "Successfully created";
  const networkErrorMessage = "Network error";
  const methodNotAllowedMessage = "method not allowed";
  const emptyValueMessage = "Value is required";

  const createCategory = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);

      await axios
        .post("category", formData)
        .then(() => {
          toast.success(successfullyMessage, {
            className:
              "bg-gray-50 shadow-lg dark:bg-slate-900 dark:text-slate-500",
          });
        })
        .catch((error) => {
          if (error.response.status === 405) {
            toast.error(methodNotAllowedMessage, {
              className:
                "bg-gray-50 shadow-lg dark:bg-slate-900 dark:text-slate-500",
            });
          } else {
            toast.error(errorMessage, {
              className:
                "bg-gray-50 shadow-lg dark:bg-slate-900 dark:text-slate-500",
            });
          }
        });
    } catch (err) {
      toast.error(networkErrorMessage, {
        className: "bg-gray-50 shadow-lg dark:bg-slate-900 dark:text-slate-500",
      });
    }
  };

  return (
    <div>
      <Toaster />
      <Nameless
        icon={<CircleStackIcon />}
        btnIcon={<EyeIcon />}
        title="Add Category"
        path="/adminpanel/categories"
        action="All Category"
      />
      <form onSubmit={handleSubmit(createCategory)} className="mt-10">
        <div className="mb-6">
          <label
            className="block mb-2 text-xs font-bold text-gray-700 uppercase"
            htmlFor="category name"
          >
            category name
          </label>
          <input
            className={`w-full p-2 border dark:border-slate-700 border-gray-400 dark:bg-slate-800 dark:text-slate-600 rounded outline-none ${
              errors.name && "w-full p-2 border-2 border-red-700 rounded"
            }`}
            type="text"
            name="category-name"
            id="category-name"
            {...register("name", { required: emptyValueMessage })}
          />
          {errors.name && (
            <p className="mt-2 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="flex mb-6 w-min">
          <Button title="Create" />
        </div>
      </form>
    </div>
  );
}

export default Create;
