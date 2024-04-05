import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { CircleStackIcon, EyeIcon } from "@heroicons/react/24/outline";
// import Button from "../../components/adminPanelComponents/Button";
import Title from "../../components/Title";
// import Modal from "../../components/adminPanelComponents/modal/Modal";
// import NoInfromationAvailable from "../../components/adminPanelComponents/NoInfromationAvailable";
// import Loading from "../../components/frontendComponents/Loading";
// import Nameless from "../../components/adminPanelComponents/Namless";

const Show = () => {
  Title("პროდუქტი");
  const params = useParams();

  const [product, setProduct] = useState({});
  //   const [isLoading, setIsLoading] = useState(false);
  const getProduct = useCallback(async () => {
    // setIsLoading(true);
    try {
      await axios.get(`product/${params.productId}`).then((res) => {
        setProduct(res.data);
      });
    } catch (err) {
      console.error(err);
    }
    // setIsLoading(false);
  }, [params.productId]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [isModalShown, setIsModalShown] = useState(false);
  //   let image = product.images[currentIndex];
  console.log(product.images[0]);
  function handleClick(index) {
    setCurrentIndex(index);
  }
  return (
    // <Fragment>
    //   {!isLoading && product && (
    //     <div className="flex items-center justify-center py-32 text-center">
    //       <div className="rounded-lg">
    //         <div className="justify-center h-96">
    //           <h1> {product.name}</h1>
    //           <p>{product.description}</p>
    //           {product.unitPrice}
    //           {product.category}

    //           {product.images?.map((image) => (
    //             <div key={image}>
    //               <img
    //                 className="ml-16"
    //                 key={product.id}
    //                 src={`${import.meta.env.VITE_ecommerce_api}${image}`}
    //                 width="64"
    //                 height="64"
    //                 alt="movie img"
    //               />
    //             </div>
    //           ))}
    //           {/* <img
    //             className="object-cover h-full rounded-lg"
    //             src={`${process.env.REACT_APP_ENV_IMAGE}${quote.thumbnail}`}
    //             alt="logo"
    //           /> */}
    //         </div>
    //         {/* <h1 className="py-12 text-5xl text-center text-white">
    //           {quote.quote[i18n.language]}
    //         </h1> */}
    //         {/* <div className="py-2 text-center text-white">
    //           <Link
    //             to={`/movie-quotes/${quote.movie_id}`}
    //             className="font-sans text-5xl underline"
    //           >
    //             {quote.movie.movie[i18n.language]}
    //           </Link>
    //         </div> */}
    //       </div>
    //     </div>
    //   )}
    //   {!isLoading && !product && <NoInfromationAvailable />}
    //   {isLoading && <Loading />}
    // </Fragment>
    <article>
      {/* <Breadcrumbs /> */}
      <div className="flex flex-col px-4 py-2 md:px-0">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="hidden w-24 cursor-pointer flex-col justify-between rounded-md border p-0.5 lg:flex">
            {product.images?.map((image, index) => (
              <img
                key={index}
                src={`${import.meta.env.VITE_ecommerce_api}${image}`}
                alt=""
                onClick={() => handleClick(index)}
                className="w-11/12 mx-auto border-b last:border-0"
              />
            ))}
          </div>
          <div
            className="relative flex items-center justify-center flex-grow border rounded-md cursor-pointer"
            // onClick={() => setIsModalShown(true)}
          >
            <img src={`${import.meta.env.VITE_ecommerce_api}${image}`} alt="" />

            {/* {isModalShown && (
              <Modal
                data={product.images}
                setIsModalShown={setIsModalShown}
                index={currentIndex}
              />
            )} */}

            {/* <div className="absolute flex gap-2 bottom-2 right-2 lg:hidden">
              {product.images?.map((image, index) => (
                <div
                  key={index}
                  //   className={classNames(
                  //     index === currentIndex ? "bg-gray-600" : "",
                  //     "h-2.5 w-2.5 rounded-full border border-gray-600"
                  //   )}
                  onClick={() => handleClick(index)}
                ></div>
              ))}
            </div> */}
          </div>
          <div className="w-full mt-4 lg:mx-4 lg:mt-0 lg:w-1/3">
            <h4 className="text-xl text-gray-800">{product.name}</h4>
            <hr className="my-4" />
            <ul className="w-full space-y-2 text-gray-800">
              <li className="flex justify-between">
                სახელი:
                <span className="text-gray-600">{product.name}</span>
              </li>
              <li className="flex justify-between">
                აღწერა:
                <span className="text-gray-600">{product.description}</span>
              </li>

              <li className="flex justify-between">
                ფასი:
                <span className="text-gray-600">{product.unitPrice} ლარი</span>
              </li>
              <li className="flex justify-between">
                კატეგორია:
                <span className="text-gray-600">{product.category}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Show;
