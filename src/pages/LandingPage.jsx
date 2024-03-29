import axios from "axios";
import { Fragment, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";
// import Loading from "components/frontendComponents/Loading";
// import { Link } from "react-router-dom";
// import NoInfromationAvailable from "components/frontendComponents/NoInfromationAvailable";

function LandingPage() {
  //   useTranslation();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = async () => {
    setIsLoading(true);
    try {
      await axios
        .get("product")
        .then((res) => {
          if (res.data) {
            setProduct(res.data);
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  return (
    // <></>
    <Fragment>
      {!isLoading && product && (
        <div className="flex justify-center py-32">
          <div className="rounded-lg">
            {product.map((item) => (
              <div key="item.id">
                <li>name: {item.name}</li>
                <li>deccription:{item.description}</li>
                <li>price: {item.unitPrice}</li>
                <li>category: {item.category}</li>
              </div>
            ))}
            {/* <div className="flex justify-center h-96">
              <img
                className="object-cover h-full rounded-lg"
                // src={`${import.meta.env.STORAGE_API}${quote.thumbnail}`}
                src=""
                alt="logo"
              />
            </div> */}
            <h1 className="py-12 text-5xl text-center text-white">
              {/* {quote.quote[i18n.language]} */}
              asd
            </h1>
            {/* <div className="py-2 text-center text-white">
              <Link
                to={`/movie-quotes/${quote.movie_id}`}
                className="font-sans text-5xl underline"
              >
             
                asdasd
              </Link>
            </div> */}
          </div>
        </div>
      )}
      {/* {!isLoading && !quote && <NoInfromationAvailable />}
      {isLoading && <Loading />} */}
    </Fragment>
  );
}

export default LandingPage;
