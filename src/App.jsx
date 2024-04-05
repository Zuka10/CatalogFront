import { Route, Routes } from "react-router-dom";
import FrontendLayout from "./layouts/FrontendLayout";
import LandingPage from "./pages/LandingPage";
import AdminPanel from "./layouts/AdminLayout";
import Dashboard from "./adminpanel/Dashboard";
import GetAllCategory from "./adminpanel/category";
import CreateCategory from "./adminpanel/category/create";
import UpdateCategory from "./adminpanel/category/update";
import GetAllProduct from "./adminpanel/product";
import ShowProduct from "./adminpanel/product/show";
import CreateProduct from "./adminpanel/product/create";
import UpdateProduct from "./adminpanel/product/update";
import PageNotFound from "./404/PageNotFound";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<FrontendLayout />}>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="movie-quotes/:movieId" element={<MovieQuotes />} />
          <Route path="login" element={<Login />} /> */}
        </Route>
        {/* <Route element={<RequireAuth />}>
          
        </Route> */}
        <Route path="/" element={<AdminPanel />}>
          <Route path="adminpanel/dashboard" element={<Dashboard />} />
          <Route
            path="/adminpanel/categories"
            element={<GetAllCategory />}
          ></Route>
          <Route
            path="/adminpanel/categories/create-category"
            element={<CreateCategory />}
          />
          <Route
            path="/adminpanel/categories/:categoryId/edit"
            element={<UpdateCategory />}
          />
          <Route
            path="/adminpanel/products"
            element={<GetAllProduct />}
          ></Route>
          <Route
            path="/adminpanel/products/:productId/show"
            element={<ShowProduct />}
          />
          <Route
            path="/adminpanel/products/create-product"
            element={<CreateProduct />}
          />
          <Route
            path="/adminpanel/product/:productId/edit"
            element={<UpdateProduct />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
