import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { useTranslation } from "react-i18next";
import Button from "../../components/adminPanelComponents/Button";
import Title from "../../components/Title";
import { CircleStackIcon, EyeIcon } from "@heroicons/react/24/outline";
import Nameless from "../../components/adminPanelComponents/Namless";
import toast, { Toaster } from "react-hot-toast";
// import i18n from "i18next";

function Create() {
  Title("Product | Create");
  // const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    // render,
    // watch,
    formState,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [productImg, setProductImg] = useState([]);

  const onFileChange = (e) => {
    if (e.target.files) {
      const imageArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setProductImg((prevImages) => prevImages.concat(imageArray));
    }
  };

  const errorMessage = "failed to create";
  const successfullyMessage = "successfully created";
  const networkErrorMessage = "network error";
  const methodNotAllowedMessage = "method not allowed";
  const emptyValueMessage = "Value is required";
  const emptySelectMessage = "The film is not selected";
  const emptyImageMessage = "No image chosen";

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        description: "",
        price: "",
        image: "",
      });
    }
  }, [formState, reset]);

  useEffect(() => {
    getCategories();
  }, []);

  // const imageHandler = (e) => {
  //   if (e) {
  //     const File = e[0];
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setProductImg(reader.result);
  //       }
  //     };

  //     if (File) {
  //       reader.readAsDataURL(File);
  //     }
  //   }
  // };

  const getCategories = async () => {
    try {
      await axios
        .get(`category`)
        .then((res) => {
          console.log(ResizeObserver);
          setCategories(res.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  };

  const createProduct = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("unitPrice", data.price);
      formData.append("categoryId", data.categoryId);
      productImg.forEach((file, index) => {
        formData.append(`image-${index}`, file);
      });
      // formData.append("image-${index}", data.image[0]);

      await axios
        .post("product", formData)
        .then((res) => {
          console.log(res);
          toast.success(successfullyMessage, {
            className:
              "bg-gray-50 shadow-lg dark:bg-slate-900 dark:text-slate-500",
          });
        })
        .catch((error) => {
          console.log(error.response);
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
        title="Add Product"
        path="/adminpanel/products"
        action="All Products"
      />
      <form
        onSubmit={handleSubmit(createProduct)}
        method="POST"
        className="flex mt-10"
        encType="multipart/form-data"
      >
        <div className="w-1/2 overflow-hidden rounded-lg md:max-w-xl">
          <div className="mb-6">
            <div className="overflow-hidden rounded-lg md:max-w-xl">
              <div className=" md:flex">
                <div className="w-full">
                  <div
                    className={`h-96 relative flex items-center justify-center  border  border-dashed rounded-lg ${
                      errors.image ? "border-red-500" : "border-gray-500"
                    }`}
                  >
                    <label
                      className="absolute mb-2 text-xl font-bold text-gray-700 uppercase"
                      htmlFor="image"
                    >
                      {!errors.image && <p>choose image</p>}
                      {errors.image && (
                        <p className="text-red-500">{errors.image.message}</p>
                      )}
                    </label>
                    <input
                      type="file"
                      className="absolute z-20 w-full h-full opacity-0 cursor-pointer "
                      name="image"
                      accept="image/*"
                      multiple
                      onChange={onFileChange}
                      // onChange={imageHandler(watch("image"))}
                      // onChange={(e) => imageHandler(e.target.files[0])}
                      {...register("image", { required: emptyImageMessage })}
                    />
                    {/* <div className="z-20 w-auto h-auto" id="filereaderimage">
                      {productImg.map((image, index) => (
                        <img
                          key={index}
                          className="w-full h-full"
                          src={URL.createObjectURL(image)}
                          alt={`image-${index}`}
                        />
                      ))}
                    </div> */}
                    {/* {render(productImg)} */}

                    {/* <div className="z-10 w-auto h-auto" id="filereaderimage">
                      {productImg && (
                        <img
                          className="w-full h-full"
                          src={productImg}
                          alt="imageFile"
                          accept="image/*"
                        />
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-10">
          <div className="mb-6">
            <label
              className="block mb-2 text-xs font-bold text-gray-700 uppercase"
              htmlFor="quote-en"
            >
              name
            </label>
            <input
              className={`w-full dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700 p-2 border border-gray-400 rounded outline-none ${
                errors.name && "w-full p-2 border-2 border-red-700 rounded"
              }`}
              type="text"
              name="quote-en"
              id="quote-en"
              {...register("name", { required: emptyValueMessage })}
            />
            {errors.name && (
              <p className="mt-2 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-xs font-bold text-gray-700 uppercase"
              htmlFor="quote-ka"
            >
              description
            </label>
            <input
              className={`w-full dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700 p-2 border border-gray-400 rounded outline-none ${
                errors.description &&
                "w-full p-2 border-2 border-red-700 rounded"
              }`}
              type="text"
              name="description"
              id="description"
              {...register("description", { required: emptyValueMessage })}
            />
            {errors.description && (
              <p className="mt-2 text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-xs font-bold text-gray-700 uppercase"
              htmlFor="quote-ka"
            >
              price
            </label>
            <input
              className={`w-full dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700 p-2 border border-gray-400 rounded outline-none ${
                errors.price && "w-full p-2 border-2 border-red-700 rounded"
              }`}
              type="text"
              name="price"
              id="price"
              {...register("price", { required: emptyValueMessage })}
            />
            {errors.price && (
              <p className="mt-2 text-xs text-red-500">
                {errors.price.message}
              </p>
            )}
          </div>
          <label className="block mb-2 text-xs font-bold text-gray-700 uppercase">
            Choose a category
          </label>
          <div className="mb-6 ">
            <select
              className="  dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700 form-select block px-3 py-1.5 font-normal text-gray-700
            bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white 
          focus:border-blue-600 
          focus:outline-none"
              aria-label="Default select example"
              name="categoryId"
              {...register("categoryId", { required: emptySelectMessage })}
            >
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {errors.categoryId && (
              <p className="mt-2 text-xs text-red-500">
                {errors.categoryId.message}
              </p>
            )}
          </div>
          <div className="flex mb-6 w-min">
            <div className="flex mb-6 w-min">
              <Button title="Create" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
